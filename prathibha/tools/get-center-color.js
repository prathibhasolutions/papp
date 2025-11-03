const sharp = require('sharp')
const path = require('path')
const img = process.argv[2] || path.join(__dirname, '..', 'assets', 'logos', 'prathibha_institute_logo.png')
    ; (async () => {
        try {
            const image = sharp(img)
            const meta = await image.metadata()
            const left = Math.max(0, Math.floor(meta.width / 2))
            const top = Math.max(0, Math.floor(meta.height / 2))
            const buf = await image.extract({ left, top, width: 1, height: 1 }).raw().toBuffer()
            const [r, g, b, a] = buf
            const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
            console.log(hex)
        } catch (e) {
            console.error('error', e.message)
            process.exit(1)
        }
    })()
