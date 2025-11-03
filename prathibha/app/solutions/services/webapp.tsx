import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WebAppService() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="globe" size={40} color="#00ffcc" />
                </View>
                <Text style={styles.title}>Web App Development</Text>
                <Text style={styles.subtitle}>
                    Powerful web applications with advanced functionality
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Coming Soon</Text>
                <Text style={styles.description}>
                    We're working on creating detailed content for this service page.
                    In the meantime, please contact us to discuss your web application needs.
                </Text>
            </View>

            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Interested in Web App Development?</Text>
                <Text style={styles.ctaText}>
                    Contact us to discuss your requirements and get a custom quote.
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => Linking.openURL('tel:+91XXXXXXXXX')}
                >
                    <Ionicons name="call" size={20} color="#121212" />
                    <Text style={styles.ctaButtonText}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e293b',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 100,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#1e40af',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 24,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00ffcc',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#cbd5e1',
        lineHeight: 24,
        textAlign: 'center',
    },
    ctaSection: {
        backgroundColor: '#1e40af',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
        textAlign: 'center',
    },
    ctaText: {
        fontSize: 16,
        color: '#e2e8f0',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    ctaButton: {
        backgroundColor: '#00ffcc',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        gap: 8,
    },
    ctaButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212',
    },
});