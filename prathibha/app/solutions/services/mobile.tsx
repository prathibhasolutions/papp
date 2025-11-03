import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FEATURES = [
    'Android & iOS Development',
    'Native Performance',
    'User-Friendly Interface',
    'Push Notifications',
    'Offline Functionality',
    'App Store Optimization',
    'Analytics Integration',
    'Complete Maintenance',
];

const APP_TYPES = [
    {
        title: 'Business Apps',
        description: 'Customer engagement and business management apps',
        examples: ['Service Booking', 'Customer Portal', 'Inventory Management'],
    },
    {
        title: 'E-commerce Apps',
        description: 'Online shopping and marketplace applications',
        examples: ['Product Catalog', 'Payment Integration', 'Order Tracking'],
    },
    {
        title: 'Educational Apps',
        description: 'Learning and training applications',
        examples: ['Online Courses', 'Quiz Apps', 'Progress Tracking'],
    },
    {
        title: 'Utility Apps',
        description: 'Tools and productivity applications',
        examples: ['Calculators', 'Converters', 'Task Management'],
    },
];

const PACKAGES = [
    {
        name: 'Basic App',
        price: '₹10,000',
        description: 'Simple app with basic features',
        features: [
            'Single Platform (Android/iOS)',
            'Up to 5 Screens',
            'Basic UI Design',
            'Simple Database',
            '2 Months Support',
        ],
    },
    {
        name: 'Business App',
        price: '₹25,000',
        description: 'Full-featured business application',
        features: [
            'Both Android & iOS',
            'Up to 15 Screens',
            'Custom Design',
            'User Authentication',
            'Push Notifications',
            '6 Months Support',
        ],
    },
    {
        name: 'Enterprise App',
        price: '₹50,000+',
        description: 'Complex apps with advanced features',
        features: [
            'Both Platforms',
            'Unlimited Screens',
            'Advanced Features',
            'Third-party Integrations',
            'Admin Panel',
            '1 Year Support',
        ],
    },
];

export default function MobileService() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="phone-portrait" size={40} color="#00ffcc" />
                </View>
                <Text style={styles.title}>Mobile App Development</Text>
                <Text style={styles.subtitle}>
                    Build powerful mobile apps for Android and iOS platforms
                </Text>
            </View>

            {/* What We Build */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>What We Build</Text>
                <Text style={styles.description}>
                    We develop high-quality mobile applications for both Android and iOS platforms. Our apps are built with modern technologies to ensure great performance and user experience.
                </Text>

                <View style={styles.appTypesList}>
                    {APP_TYPES.map((type, index) => (
                        <View key={index} style={styles.appTypeCard}>
                            <Text style={styles.appTypeTitle}>{type.title}</Text>
                            <Text style={styles.appTypeDescription}>{type.description}</Text>
                            <View style={styles.examplesList}>
                                {type.examples.map((example, idx) => (
                                    <View key={idx} style={styles.exampleItem}>
                                        <Ionicons name="chevron-forward" size={16} color="#00ffcc" />
                                        <Text style={styles.exampleText}>{example}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Features */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App Features We Include</Text>
                <View style={styles.featuresList}>
                    {FEATURES.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                            <Text style={styles.featureText}>{feature}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Pricing */}
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

            {/* Development Process */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Development Process</Text>
                <View style={styles.processSteps}>
                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>1</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Planning</Text>
                            <Text style={styles.stepDescription}>We analyze your requirements and create a detailed project plan</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>2</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Design</Text>
                            <Text style={styles.stepDescription}>We create wireframes and UI designs for your approval</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>3</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Development</Text>
                            <Text style={styles.stepDescription}>We build the app with all features and thorough testing</Text>
                        </View>
                    </View>

                    <View style={styles.processStep}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>4</Text>
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Launch</Text>
                            <Text style={styles.stepDescription}>We publish your app to Google Play Store and Apple App Store</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* CTA */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Ready to Build Your App?</Text>
                <Text style={styles.ctaText}>
                    Let's discuss your mobile app idea and turn it into reality with our expert development team.
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => Linking.openURL('tel:+91XXXXXXXXX')}
                >
                    <Ionicons name="call" size={20} color="#121212" />
                    <Text style={styles.ctaButtonText}>Get Free Consultation</Text>
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
    appTypesList: {
        gap: 16,
    },
    appTypeCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
    },
    appTypeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    appTypeDescription: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 12,
    },
    examplesList: {
        gap: 6,
    },
    exampleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    exampleText: {
        fontSize: 14,
        color: '#cbd5e1',
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