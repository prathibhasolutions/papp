import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ElectricalCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/electrician.jpg')} style={styles.img} />
            <Text style={styles.title}>ELECTRICAL</Text>
            <Text style={styles.desc}>Electricians install, maintain, and repair electrical systems, including wiring, outlets, and fixtures, to ensure safe and reliable electricity supply in buildings and facilities.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
