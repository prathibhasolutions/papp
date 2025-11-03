import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COMPANY_STATS = [
    { icon: 'home-outline', value: '500+', label: 'Happy Homes' },
    { icon: 'people-outline', value: '50+', label: 'Skilled Professionals' },
    { icon: 'construct-outline', value: '10+', label: 'Service Categories' },
    { icon: 'time-outline', value: '24/7', label: 'Support Available' },
];

const OUR_VALUES = [
    {
        icon: 'checkmark-circle-outline',
        title: 'Quality Assurance',
        description: 'We ensure every job is completed to the highest standards with quality materials and skilled workmanship.',
    },
    {
        icon: 'flash-outline',
        title: 'Quick Response',
        description: 'Fast and efficient service delivery with same-day booking options for urgent repair needs.',
    },
    {
        icon: 'shield-checkmark-outline',
        title: 'Trusted Professionals',
        description: 'All our technicians are verified, experienced, and trained to handle various home service requirements.',
    },
    {
        icon: 'heart-outline',
        title: 'Customer Satisfaction',
        description: 'Your satisfaction is our priority. We work until you are completely happy with our service.',
    },
];

const SERVICES_OVERVIEW = [
    'Plumbing - Water supply, drainage, and leak repairs',
    'Electrical - Wiring, installations, and safety checks',
    'Carpentry - Furniture repair, custom woodwork',
    'Painting - Interior and exterior painting services',
    'Tiles Work - Installation and repair of all tile types',
    'Appliance Repair - Geyser, washing machine, refrigerator, water purifier',
    'Logistics - Professional house shifting and moving services',
];

export default function About() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>About Prathibha Services</Text>
            <Text style={styles.subtitle}>
                Building Better Homes, Service by Service
            </Text>

            {/* Company Story */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Story</Text>
                <View style={styles.storyCard}>
                    <Text style={styles.storyText}>
                        Prathibha Services started with a simple mission: to provide reliable, high-quality home services
                        that homeowners can trust. Based in Nizamabad, Telangana, we have grown from a small local business
                        to a trusted name in home maintenance and repair services.
                    </Text>
                    <Text style={styles.storyText}>
                        Our journey began with the understanding that maintaining a home should be easy and stress-free.
                        We believe every home deserves professional care, whether it's a simple repair or a major renovation project.
                    </Text>
                </View>
            </View>

            {/* Company Stats */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Impact</Text>
                <View style={styles.statsContainer}>
                    {COMPANY_STATS.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <Ionicons name={stat.icon as any} size={32} color="#ff6b35" />
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Our Mission */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Mission</Text>
                <View style={styles.missionCard}>
                    <Text style={styles.missionText}>
                        To be the most trusted and reliable home services provider in Telangana, delivering exceptional
                        quality work that enhances the comfort and value of every home we serve.
                    </Text>
                </View>
            </View>

            {/* Our Values */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Choose Us</Text>
                {OUR_VALUES.map((value, index) => (
                    <View key={index} style={styles.valueCard}>
                        <View style={styles.valueHeader}>
                            <Ionicons name={value.icon as any} size={24} color="#ff6b35" />
                            <Text style={styles.valueTitle}>{value.title}</Text>
                        </View>
                        <Text style={styles.valueDescription}>{value.description}</Text>
                    </View>
                ))}
            </View>

            {/* Services Overview */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                <View style={styles.servicesCard}>
                    <Text style={styles.servicesIntro}>
                        We offer comprehensive home services to keep your property in perfect condition:
                    </Text>
                    {SERVICES_OVERVIEW.map((service, index) => (
                        <View key={index} style={styles.serviceItem}>
                            <Ionicons name="checkmark-outline" size={16} color="#ff6b35" />
                            <Text style={styles.serviceText}>{service}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Service Area */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Service Area</Text>
                <View style={styles.areaCard}>
                    <View style={styles.areaHeader}>
                        <Ionicons name="location-outline" size={24} color="#ff6b35" />
                        <Text style={styles.areaTitle}>Nizamabad & Surrounding Areas</Text>
                    </View>
                    <Text style={styles.areaText}>
                        We proudly serve Nizamabad city and the surrounding areas in Telangana.
                        Our local presence ensures quick response times and personalized service
                        that understands the unique needs of our community.
                    </Text>
                </View>
            </View>

            {/* Contact CTA */}
            <View style={styles.section}>
                <View style={styles.ctaCard}>
                    <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
                    <Text style={styles.ctaText}>
                        Contact us today for all your home service needs. We're here to make your home better!
                    </Text>
                    <View style={styles.ctaButtons}>
                        <View style={styles.ctaButton}>
                            <Ionicons name="call-outline" size={20} color="#ff6b35" />
                            <Text style={styles.ctaButtonText}>Call Us Now</Text>
                        </View>
                        <View style={styles.ctaButton}>
                            <Ionicons name="calendar-outline" size={20} color="#ff6b35" />
                            <Text style={styles.ctaButtonText}>Book Service</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
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
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 16,
    },
    storyCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    storyText: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 24,
        marginBottom: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    statCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        width: '48%',
        minHeight: 120,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: '#ddd',
        textAlign: 'center',
    },
    missionCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    missionText: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    valueCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    valueHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    valueTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    valueDescription: {
        fontSize: 14,
        color: '#ddd',
        lineHeight: 20,
    },
    servicesCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    servicesIntro: {
        fontSize: 16,
        color: '#ddd',
        marginBottom: 16,
        lineHeight: 24,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    serviceText: {
        fontSize: 14,
        color: '#ddd',
        flex: 1,
    },
    areaCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    areaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    areaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    areaText: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 24,
    },
    ctaCard: {
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
        backgroundColor: '#333',
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
