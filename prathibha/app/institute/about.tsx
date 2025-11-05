import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function About() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#0f0f23', '#1a1a3e', '#2d1b69']}
                style={styles.backgroundGradient}
            />
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>About Prathibha Institute</Text>
                <Text style={styles.text}>Welcome to Prathibha Institute - Your gateway to excellence in education.</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f0f23' },
    backgroundGradient: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
    scrollView: { flex: 1 },
    contentContainer: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 },
    text: { fontSize: 16, color: '#e2e8f0', lineHeight: 24 },
});
