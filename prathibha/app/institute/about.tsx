import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function About() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#121212', padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>About Prathibha</Text>
            <Text style={{ color: '#fff', marginBottom: 10 }}>
                Welcome to Prathibha, a distinguished educational institute committed to shaping futures and fostering innovation. Our mission is to provide a transformative learning experience that equips students with the skills, knowledge, and mindset needed to thrive in an ever-evolving world.
            </Text>
            <Text style={{ color: '#00ffcc', fontWeight: 'bold', marginTop: 16, marginBottom: 6 }}>Our Founders</Text>
            <View style={{ marginBottom: 16 }}>
                {/* Shravan Card */}
                <View style={{ flexDirection: 'row', backgroundColor: '#222', borderRadius: 12, padding: 16, marginBottom: 16, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Image source={require('../assets/sravan.jpg')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Shravan</Text>
                        <Text style={{ color: '#fff', fontSize: 13, marginBottom: 2 }}>Co-Founder</Text>
                    </View>
                    <View style={{ flex: 2, paddingLeft: 16 }}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>B.Tech, NIT Warangal (2020)</Text>
                        <Text style={{ color: '#fff', fontSize: 12 }}>Ex-Officer at HPCL, GATE AIR-669, JEE-Mains 99.58%, TS EAMCET Rank 517</Text>
                    </View>
                </View>
                {/* Akhilesh Card */}
                <View style={{ flexDirection: 'row', backgroundColor: '#222', borderRadius: 12, padding: 16, marginBottom: 16, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Image source={require('../assets/akhilesh.jpg')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Akhilesh</Text>
                        <Text style={{ color: '#fff', fontSize: 13, marginBottom: 2 }}>Co-Founder</Text>
                    </View>
                    <View style={{ flex: 2, paddingLeft: 16 }}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>B.Tech, EEE Hyderabad (2020)</Text>
                        <Text style={{ color: '#fff', fontSize: 12 }}>SSC CGL 2022, IBPS PO 2021, TSPSC Group-4 2023</Text>
                    </View>
                </View>
                {/* Shashank Card */}
                <View style={{ flexDirection: 'row', backgroundColor: '#222', borderRadius: 12, padding: 16, marginBottom: 16, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Image source={require('../assets/shashank photo.jpg')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Shashank Reddy</Text>
                        <Text style={{ color: '#fff', fontSize: 13, marginBottom: 2 }}>Co-Founder</Text>
                    </View>
                    <View style={{ flex: 2, paddingLeft: 16 }}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>B.Tech, Mech Hyderabad (2020)</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: '#fff', marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Achievements:</Text> Over 75+ students successfully completed. State-of-the-art infrastructure and modern teaching methods. Pioneers in offering industry-relevant courses.
            </Text>
            <Text style={{ color: '#00ffcc', fontWeight: 'bold', marginTop: 16, marginBottom: 6 }}>Contact</Text>
            <Text style={{ color: '#fff', marginBottom: 4 }}>Ground Floor, D.S. Bingi Arcade, Near ABS Venture, Vinayak Nagar, Nizamabad-503001</Text>
            <Text style={{ color: '#fff', marginBottom: 4 }}>Phone: +91 9030941099</Text>
            <Text style={{ color: '#fff', marginBottom: 10 }}>Email: prathibhainstitutions@gmail.com</Text>
        </ScrollView>
    );
}
