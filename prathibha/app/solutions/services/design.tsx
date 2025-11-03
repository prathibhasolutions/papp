import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DESIGN_SERVICES = [
    {
        title: 'Website UI/UX Design',
        description: 'Beautiful and user-friendly website interfaces',
        icon: 'desktop-outline',
    },
    {
        title: 'Mobile App Design',
        description: 'Intuitive mobile application interfaces',
        icon: 'phone-portrait-outline',
    },
    {
        title: 'Logo & Branding',
        description: 'Professional brand identity design',
        icon: 'brush-outline',
    },
    {
        title: 'User Experience Research',
        description: 'Understanding user behavior and needs',
        icon: 'search-outline',
    },
];

const PROCESS_STEPS = [
    {
        title: 'Research',
        description: 'We study your business, target audience, and competitors',
        icon: 'analytics-outline',
    },
    {
        title: 'Wireframing',
        description: 'We create basic layouts and structure for your project',
        icon: 'grid-outline',
    },
    {
        title: 'Design',
        description: 'We craft beautiful visual designs with your brand colors',
        icon: 'color-palette-outline',
    },
    {
        title: 'Prototype',
        description: 'We create interactive prototypes for testing and feedback',
        icon: 'play-outline',
    },
    {
        title: 'Refinement',
        description: 'We polish the design based on your feedback',
        icon: 'checkmark-circle-outline',
    },
];

const PACKAGES = [
    {
        name: 'Basic Design',
        price: '₹3,000',
        description: 'Essential design package',
        features: [
            'Logo Design',
            'Basic Website Mockup',
            'Color Scheme',
            '2 Revisions',
            'Source Files',
        ],
    },
    {
        name: 'Professional Design',
        price: '₹8,000',
        description: 'Complete design solution',
        features: [
            'Complete Branding Package',
            'Website/App UI Design',
            'User Experience Optimization',
            '5 Revisions',
            'Design Guidelines',
            'All Source Files',
        ],
    },
    {
        name: 'Premium Design',
        price: '₹15,000',
        description: 'Advanced design with research',
        features: [
            'User Research & Analysis',
            'Complete Design System',
            'Interactive Prototypes',
            'Unlimited Revisions',
            'Brand Guidelines',
            'Developer Handoff',
        ],
    },
];

export default function DesignService() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="color-palette" size={40} color="#00ffcc" />
                </View>
                <Text style={styles.title}>UI/UX Design</Text>
                <Text style={styles.subtitle}>
                    Creating beautiful and user-friendly designs that convert
                </Text>
            </View>

            {/* What We Design */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>What We Design</Text>
                <Text style={styles.description}>
                    We create stunning user interfaces and experiences that not only look great but also help your users accomplish their goals easily and efficiently.
                </Text>

                <View style={styles.servicesList}>
                    {DESIGN_SERVICES.map((service, index) => (
                        <View key={index} style={styles.serviceCard}>
                            <View style={styles.serviceIcon}>
                                <Ionicons name={service.icon as any} size={32} color="#00ffcc" />
                            </View>
                            <View style={styles.serviceContent}>
                                <Text style={styles.serviceTitle}>{service.title}</Text>
                                <Text style={styles.serviceDescription}>{service.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Our Process */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Design Process</Text>
                <View style={styles.processSteps}>
                    {PROCESS_STEPS.map((step, index) => (
                        <View key={index} style={styles.processStep}>
                            <View style={styles.stepIconContainer}>
                                <Ionicons name={step.icon as any} size={24} color="#00ffcc" />
                            </View>
                            <View style={styles.stepContent}>
                                <Text style={styles.stepTitle}>{step.title}</Text>
                                <Text style={styles.stepDescription}>{step.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Why Choose Our Design Services */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Choose Our Design Services?</Text>
                <View style={styles.benefitsList}>
                    <View style={styles.benefitItem}>
                        <Ionicons name="people-outline" size={24} color="#00ffcc" />
                        <View style={styles.benefitContent}>
                            <Text style={styles.benefitTitle}>User-Centered Design</Text>
                            <Text style={styles.benefitDescription}>We design with your users in mind, ensuring great experiences</Text>
                        </View>
                    </View>

                    <View style={styles.benefitItem}>
                        <Ionicons name="phone-portrait-outline" size={24} color="#00ffcc" />
                        <View style={styles.benefitContent}>
                            <Text style={styles.benefitTitle}>Mobile-First Approach</Text>
                            <Text style={styles.benefitDescription}>All designs are optimized for mobile devices first</Text>
                        </View>
                    </View>

                    <View style={styles.benefitItem}>
                        <Ionicons name="trending-up-outline" size={24} color="#00ffcc" />
                        <View style={styles.benefitContent}>
                            <Text style={styles.benefitTitle}>Conversion Focused</Text>
                            <Text style={styles.benefitDescription}>Designs that help increase your business conversions</Text>
                        </View>
                    </View>

                    <View style={styles.benefitItem}>
                        <Ionicons name="refresh-outline" size={24} color="#00ffcc" />
                        <View style={styles.benefitContent}>
                            <Text style={styles.benefitTitle}>Iterative Process</Text>
                            <Text style={styles.benefitDescription}>We refine designs based on feedback and testing</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Pricing */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Design Packages</Text>

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

            {/* CTA */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Ready to Create Amazing Designs?</Text>
                <Text style={styles.ctaText}>
                    Let's work together to create designs that your users will love and that drive your business forward.
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => Linking.openURL('tel:+91XXXXXXXXX')}
                >
                    <Ionicons name="call" size={20} color="#121212" />
                    <Text style={styles.ctaButtonText}>Discuss Your Design Needs</Text>
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
    servicesList: {
        gap: 16,
    },
    serviceCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#1e40af',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    serviceContent: {
        flex: 1,
    },
    serviceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    serviceDescription: {
        fontSize: 14,
        color: '#94a3b8',
        lineHeight: 20,
    },
    processSteps: {
        gap: 16,
    },
    processStep: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepIconContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#1e40af',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    stepContent: {
        flex: 1,
    },
    stepTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    stepDescription: {
        fontSize: 14,
        color: '#cbd5e1',
        lineHeight: 20,
    },
    benefitsList: {
        gap: 16,
    },
    benefitItem: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    benefitContent: {
        flex: 1,
        marginLeft: 16,
    },
    benefitTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    benefitDescription: {
        fontSize: 14,
        color: '#cbd5e1',
        lineHeight: 20,
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