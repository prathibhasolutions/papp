const sharp = require('sharp')
const path = require('path')
const img = process.argv[2] || path.join(__dirname, '..', 'assets', 'logos', 'prathibha_institute_logo.png')
    ; (async () => {
        try {
            // downscale to speed up
            const buf = await sharp(img).resize(64, 64, { fit: 'inside' }).raw().toBuffer({ resolveWithObject: true })
            const { data, info } = buf
            let rSum = 0, gSum = 0, bSum = 0, count = 0
            for (let i = 0; i < data.length; i += info.channels) {
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]
                // skip near-white pixels (background)
                if (r > 240 && g > 240 && b > 240) continue
                rSum += r; gSum += g; bSum += b; count++
            }
            if (count === 0) {
                console.log('#3349C8')
                return
            }
            const r = Math.round(rSum / count)
            const g = Math.round(gSum / count)
            const b = Math.round(bSum / count)
            const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
            console.log(hex)
        } catch (e) {
            console.error('error', e.message)
            process.exit(1)
        }
    })()
