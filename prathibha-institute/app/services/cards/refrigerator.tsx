import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function RefrigeratorCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/refri.jpg')} style={styles.img} />
            <Text style={styles.title}>REFRIGERATOR REPAIR</Text>
            <Text style={styles.desc}>Refrigerator repair involves diagnosing and fixing issues in cooling systems, such as compressor or thermostat malfunctions, to ensure proper temperature control and preservation of food in households.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
