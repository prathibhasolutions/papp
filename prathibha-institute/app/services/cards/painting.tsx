import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PaintingCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/painting.jpg')} style={styles.img} />
            <Text style={styles.title}>PAINTING</Text>
            <Text style={styles.desc}>Painting works entail surface preparation, applying primers and coats of paint, and achieving a desired finish on walls, ceilings, or structures to enhance aesthetics and protect surfaces.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
