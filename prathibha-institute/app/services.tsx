import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServicesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Prathibha Services</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
