import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import PlumbingCard from './cards/plumbing';
import LogisticsCard from './cards/logistics';
import CarpentryCard from './cards/carpentry';
import PaintingCard from './cards/painting';
import TilesCard from './cards/tiles';
import ElectricalCard from './cards/electrical';
import GeyserCard from './cards/geyser';
import WashingMachineCard from './cards/washingmachine';
import WaterPurifierCard from './cards/waterpurifier';
import RefrigeratorCard from './cards/refrigerator';

const SERVICE_CATEGORIES = [
    {
        title: 'Home Services',
        description: 'Essential maintenance and repair services for your home',
        services: [
            { component: PlumbingCard, route: '/services/cards/plumbing', name: 'Plumbing' },
            { component: ElectricalCard, route: '/services/cards/electrical', name: 'Electrical' },
            { component: CarpentryCard, route: '/services/cards/carpentry', name: 'Carpentry' },
            { component: PaintingCard, route: '/services/cards/painting', name: 'Painting' },
            { component: TilesCard, route: '/services/cards/tiles', name: 'Tiles Work' },
            { component: LogisticsCard, route: '/services/cards/logistics', name: 'House Shifting' },
        ]
    },
    {
        title: 'Appliance Repairs',
        description: 'Professional repair services for all your home appliances',
        services: [
            { component: GeyserCard, route: '/services/cards/geyser', name: 'Geyser Repair' },
            { component: WashingMachineCard, route: '/services/cards/washingmachine', name: 'Washing Machine' },
            { component: RefrigeratorCard, route: '/services/cards/refrigerator', name: 'Refrigerator' },
            { component: WaterPurifierCard, route: '/services/cards/waterpurifier', name: 'Water Purifier' },
        ]
    }
];

export default function Services() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Our Services</Text>
            <Text style={styles.subtitle}>
                Professional home services at your doorstep
            </Text>

            {SERVICE_CATEGORIES.map((category, categoryIndex) => (
                <View key={categoryIndex} style={styles.categorySection}>
                    <View style={styles.categoryHeader}>
                        <Text style={styles.categoryTitle}>{category.title}</Text>
                        <Text style={styles.categoryDescription}>{category.description}</Text>
                    </View>

                    <View style={styles.servicesGrid}>
                        {category.services.map((service, serviceIndex) => {
                            const ServiceComponent = service.component;
                            return (
                                <TouchableOpacity
                                    key={serviceIndex}
                                    onPress={() => router.push(service.route as any)}
                                    style={styles.serviceWrapper}
                                >
                                    <ServiceComponent />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            ))}

            {/* Why Choose Us */}
            <View style={styles.whyChooseSection}>
                <Text style={styles.sectionTitle}>Why Choose Prathibha Services?</Text>
                <View style={styles.featuresGrid}>
                    <View style={styles.featureCard}>
                        <Ionicons name="time-outline" size={32} color="#ff6b35" />
                        <Text style={styles.featureTitle}>Quick Response</Text>
                        <Text style={styles.featureDescription}>Same-day service available for urgent repairs</Text>
                    </View>

                    <View style={styles.featureCard}>
                        <Ionicons name="shield-checkmark-outline" size={32} color="#ff6b35" />
                        <Text style={styles.featureTitle}>Trusted Professionals</Text>
                        <Text style={styles.featureDescription}>Verified and experienced technicians</Text>
                    </View>

                    <View style={styles.featureCard}>
                        <Ionicons name="checkmark-circle-outline" size={32} color="#ff6b35" />
                        <Text style={styles.featureTitle}>Quality Guarantee</Text>
                        <Text style={styles.featureDescription}>100% satisfaction guarantee on all work</Text>
                    </View>

                    <View style={styles.featureCard}>
                        <Ionicons name="cash-outline" size={32} color="#ff6b35" />
                        <Text style={styles.featureTitle}>Fair Pricing</Text>
                        <Text style={styles.featureDescription}>Transparent and competitive rates</Text>
                    </View>
                </View>
            </View>

            {/* Call to Action */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Need a Service?</Text>
                <Text style={styles.ctaText}>
                    Contact us now for quick and professional home services
                </Text>
                <View style={styles.ctaButtons}>
                    <View style={styles.ctaButton}>
                        <Ionicons name="call-outline" size={20} color="#fff" />
                        <Text style={styles.ctaButtonText}>Call Now</Text>
                    </View>
                    <View style={styles.ctaButton}>
                        <Ionicons name="logo-whatsapp" size={20} color="#fff" />
                        <Text style={styles.ctaButtonText}>WhatsApp</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#ddd',
        textAlign: 'center',
        marginBottom: 30,
    },
    categorySection: {
        marginBottom: 30,
    },
    categoryHeader: {
        marginBottom: 20,
    },
    categoryTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 8,
    },
    categoryDescription: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 24,
    },
    servicesGrid: {
        gap: 16,
    },
    serviceWrapper: {
        marginBottom: 4,
    },
    whyChooseSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 20,
        textAlign: 'center',
    },
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    featureCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        width: '48%',
        minHeight: 140,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 12,
        marginBottom: 8,
        textAlign: 'center',
    },
    featureDescription: {
        fontSize: 12,
        color: '#ddd',
        textAlign: 'center',
        lineHeight: 16,
    },
    ctaSection: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff6b35',
    },
    ctaTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    ctaText: {
        fontSize: 16,
        color: '#ddd',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    ctaButtons: {
        flexDirection: 'row',
        gap: 16,
    },
    ctaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff6b35',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        gap: 8,
    },
    ctaButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
