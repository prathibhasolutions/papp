import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Home() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#121212', padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Welcome to Prathibha Solutions</Text>

            <Text style={{ color: '#fff', marginBottom: 20, lineHeight: 24, fontSize: 17, textAlign: 'center' }}>
                We are an upcoming major software company that provides all IT services including mobile apps, web development, graphic design, and digital solutions for your business needs.
            </Text>

            <Text style={{ color: '#fff', marginBottom: 12, fontStyle: 'italic', textAlign: 'center', fontSize: 16 }}>
                "Ready to grow your business online? Let's talk about how we can help."
            </Text>
        </ScrollView>
    );
}