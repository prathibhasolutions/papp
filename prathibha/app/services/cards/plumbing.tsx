import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PlumbingCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/plumbing.jpg')} style={styles.img} />
            <Text style={styles.title}>PLUMBING</Text>
            <Text style={styles.desc}>Plumbing work involves installing, repairing, and maintaining water and sewage systems in buildings. This includes pipes, fixtures, and fittings to ensure proper water supply and waste removal.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
