import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SERVICES = [
    {
        id: 'website',
        title: 'Website Development',
        description: 'We build websites for your business starting from just ₹2,000. Simple single pages to complex multi-page sites, all mobile-friendly.',
        icon: 'desktop-outline',
        price: 'Starting from ₹2,000',
        route: '/solutions/services/website'
    },
    {
        id: 'webapp',
        title: 'Web App Development',
        description: 'We create web applications with login systems, e-commerce features, and backend code. Everything handled by us at affordable prices.',
        icon: 'globe-outline',
        price: 'Custom Pricing',
        route: '/solutions/services/webapp'
    },
    {
        id: 'mobile',
        title: 'Mobile App Development',
        description: 'We build mobile apps for both Android and iPhone starting from ₹10,000. Any kind of app with complete maintenance included.',
        icon: 'phone-portrait-outline',
        price: 'Starting from ₹10,000',
        route: '/solutions/services/mobile'
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        description: 'We design beautiful and easy-to-use interfaces for websites and apps. Professional designs that customers love to use.',
        icon: 'color-palette-outline',
        price: 'Custom Pricing',
        route: '/solutions/services/design'
    },
    {
        id: 'hosting',
        title: 'Domains & Hosting',
        description: 'We handle domain registration and website hosting with 24/7 support. Fast, reliable hosting at very affordable prices.',
        icon: 'server-outline',
        price: 'Starting from ₹500/year',
        route: '/solutions/services/hosting'
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        description: 'We help your business grow online with social media marketing, Google ads, and SEO to reach more customers and increase sales.',
        icon: 'trending-up-outline',
        price: 'Custom Packages',
        route: '/solutions/services/marketing'
    },
    {
        id: 'graphics',
        title: 'Graphic Design',
        description: 'We create business cards, brochures, social media posts, video editing, and all design work for your business at affordable prices.',
        icon: 'image-outline',
        price: 'Starting from ₹200',
        route: '/solutions/services/graphics'
    },
];

export default function Services() {
    const router = useRouter();

    const handleServicePress = (route: string) => {
        router.push(route as any);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Our Services</Text>

            <Text style={styles.subtitle}>
                Comprehensive IT solutions tailored for your business needs
            </Text>

            <View style={styles.servicesGrid}>
                {SERVICES.map((service) => (
                    <TouchableOpacity
                        key={service.id}
                        style={styles.serviceCard}
                        onPress={() => handleServicePress(service.route)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.cardHeader}>
                            <View style={styles.iconContainer}>
                                <Ionicons name={service.icon as any} size={32} color="#00ffcc" />
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                            </View>
                        </View>

                        <Text style={styles.serviceTitle}>{service.title}</Text>
                        <Text style={styles.serviceDescription}>{service.description}</Text>

                        <View style={styles.cardFooter}>
                            <Text style={styles.priceText}>{service.price}</Text>
                            <Text style={styles.learnMore}>Learn More →</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.ctaSection}>
                <Text style={styles.ctaText}>
                    "Ready to grow your business online? Let's talk about how we can help."
                </Text>
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
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        color: '#94a3b8',
        marginBottom: 30,
        lineHeight: 24,
        fontSize: 16,
        textAlign: 'center',
    },
    servicesGrid: {
        gap: 16,
    },
    serviceCard: {
        backgroundColor: '#334155',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#475569',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#1e40af',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    serviceDescription: {
        color: '#cbd5e1',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceText: {
        color: '#00ffcc',
        fontSize: 16,
        fontWeight: '600',
    },
    learnMore: {
        color: '#00ffcc',
        fontSize: 14,
        fontWeight: '500',
    },
    ctaSection: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#1e40af',
        borderRadius: 12,
    },
    ctaText: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 24,
    },
});