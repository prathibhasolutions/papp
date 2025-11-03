import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TilesCard() {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/images/services/tiles.jpg')} style={styles.img} />
            <Text style={styles.title}>TILES WORK</Text>
            <Text style={styles.desc}>Tile works involve the installation of ceramic, porcelain, or other types of tiles on surfaces such as floors and walls, providing decorative and functional enhancements to spaces.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, marginBottom: 12 },
    img: { width: '100%', height: 140, borderRadius: 6, marginBottom: 8 },
    title: { color: '#00a0ff', fontWeight: '700', fontSize: 16 },
    desc: { color: '#ddd', marginTop: 8 },
});
