import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WashingMachineCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/washingmachinerepair.jpg')} style={styles.img} />
            <Text style={styles.title}>WASHING MACHINE REPAIR</Text>
            <Text style={styles.desc}>Washing machine repair includes diagnosing and fixing issues such as motor problems, leaks, electrical faults, to ensure proper functioning and convenience for households.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
