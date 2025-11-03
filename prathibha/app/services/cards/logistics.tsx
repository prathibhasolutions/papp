import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LogisticsCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/logistics.jpg')} style={styles.img} />
            <Text style={styles.title}>LOGISTICS</Text>
            <Text style={styles.desc}>House shifting is the process of moving a residence from one location to another, involving packing, loading, transportation, and unpacking of household belongings for a successful relocation.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
