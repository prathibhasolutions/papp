import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CarpentryCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/carpentry.jpg')} style={styles.img} />
            <Text style={styles.title}>CARPENTRY</Text>
            <Text style={styles.desc}>Carpentry involves shaping, assembling, and installing wooden structures, such as furniture, cabinets, and building frameworks. It requires skills in cutting, joining, and finishing wood materials.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
