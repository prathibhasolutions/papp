import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Home() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1B4332', padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Welcome to Prathibha Nursery</Text>

            <Text style={{ color: '#fff', marginBottom: 20, lineHeight: 24, fontSize: 17, textAlign: 'center' }}>
                Your trusted partner in creating beautiful green spaces. We provide high-quality plants, seeds, and comprehensive gardening services.
            </Text>

            <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 12, marginBottom: 16 }}>
                <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>🌱 Fresh Plants Daily</Text>
                <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, textAlign: 'center' }}>
                    We receive fresh plants every day to ensure you get the healthiest specimens for your garden.
                </Text>
            </View>

            <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 12, marginBottom: 16 }}>
                <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>🏡 Home & Garden Solutions</Text>
                <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, textAlign: 'center' }}>
                    From small indoor plants to complete garden makeovers, we have everything you need.
                </Text>
            </View>

            <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 12, marginBottom: 20 }}>
                <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>🌿 Expert Guidance</Text>
                <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, textAlign: 'center' }}>
                    Our experienced team provides personalized advice for plant care and garden design.
                </Text>
            </View>

            <Text style={{ color: '#fff', marginBottom: 12, fontStyle: 'italic', textAlign: 'center', fontSize: 16 }}>
                "Growing green dreams, one plant at a time."
            </Text>
        </ScrollView>
    );
}