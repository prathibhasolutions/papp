import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FEATURES = [
    'Responsive Design (Mobile-Friendly)',
    'Fast Loading Speed',
    'SEO Optimized',
    'Contact Forms',
    'Social Media Integration',
    'Google Maps Integration',
    'SSL Certificate Included',
    '1 Year Free Maintenance',
];

const PACKAGES = [
    {
        name: 'Basic Website',
        price: '₹2,000',
        description: 'Perfect for small businesses',
        features: [
            'Single Page Website',
            'Contact Information',
            'Basic Design',
            'Mobile Responsive',
            '1 Month Support',
        ],
    },
    {
        name: 'Business Website',
        price: '₹5,000',
        description: 'Comprehensive business solution',
        features: [
            'Up to 5 Pages',
            'Professional Design',
            'Contact Forms',
            'Gallery Section',
            'Google Maps',
            '3 Months Support',
        ],
    },
    {
        name: 'Premium Website',
        price: '₹10,000',
        description: 'Advanced features included',
        features: [
            'Unlimited Pages',
            'Custom Design',
            'Blog Section',
            'Admin Panel',
            'E-commerce Ready',
            '1 Year Support',
        ],
    },
];

export default function WebsiteService() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="desktop" size={40} color="#00ffcc" />
                </View>
                <Text style={styles.title}>Website Development</Text>
                <Text style={styles.subtitle}>
                    Professional websites that help your business grow online
                </Text>
            </View>

            {/* What We Offer */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>What We Offer</Text>
                <Text style={styles.description}>
                    We create modern, responsive websites that look great on all devices. Our websites are built with the latest technologies and best practices to ensure your business stands out online.
                </Text>

                <View style={styles.featuresList}>
                    {FEATURES.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                            <Text style={styles.featureText}>{feature}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Pricing Packages */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Packages</Text>

                {PACKAGES.map((pkg, index) => (
                    <View key={index} style={styles.packageCard}>
                        <View style={styles.packageHeader}>
                            <Text style={styles.packageName}>{pkg.name}</Text>
                            <Text style={styles.packagePrice}>{pkg.price}</Text>
                        </View>
                        <Text style={styles.packageDescription}>{pkg.description}</Text>

                        <View style={styles.packageFeatures}>
                            {pkg.features.map((feature, idx) => (
                                <View key={idx} style={styles.packageFeatureItem}>
                                    <Ionicons name="checkmark" size={16} color="#00ffcc" />
                                    <Text style={styles.packageFeatureText}>{feature}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            {/* Process */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Process</Text>
                <View style={styles.processSteps}>
                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>1</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Discussion</Text>
                            <Text style={styles.stepDescription}>We discuss your requirements and understand your business goals</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>2</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Design</Text>
                            <Text style={styles.stepDescription}>We create a design mockup and get your approval</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>3</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Development</Text>
                            <Text style={styles.stepDescription}>We build your website with all the required features</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>4</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Launch</Text>
                            <Text style={styles.stepDescription}>We deploy your website and provide training if needed</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* CTA */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
                <Text style={styles.ctaText}>
                    Contact us today to discuss your website requirements and get a free quote.
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => Linking.openURL('tel:+91XXXXXXXXX')}
                >
                    <Ionicons name="call" size={20} color="#121212" />
                    <Text style={styles.ctaButtonText}>Call Now for Free Quote</Text>
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
        marginBottom: 20,
    },
    featuresList: {
        gap: 12,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    featureText: {
        fontSize: 16,
        color: '#fff',
        flex: 1,
    },
    packageCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#475569',
    },
    packageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    packageName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    packagePrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00ffcc',
    },
    packageDescription: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 16,
    },
    packageFeatures: {
        gap: 8,
    },
    packageFeatureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    packageFeatureText: {
        fontSize: 14,
        color: '#cbd5e1',
        flex: 1,
    },
    processSteps: {
        gap: 20,
    },
    processStep: {
        flexDirection: 'row',
        gap: 16,
    },
    stepNumber: {
        width: 40,
        height: 40,
        backgroundColor: '#00ffcc',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepNumberText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#121212',
    },
    stepContent: {
        flex: 1,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    stepDescription: {
        fontSize: 14,
        color: '#cbd5e1',
        lineHeight: 20,
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