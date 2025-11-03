import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CONTACT_INFO = [
    {
        id: 1,
        type: 'phone',
        label: 'Phone',
        value: '+91 XXXXX XXXXX',
        icon: 'call',
        action: () => Linking.openURL('tel:+91XXXXXXXXX'),
    },
    {
        id: 2,
        type: 'email',
        label: 'Email',
        value: 'info@prathibhasolutions.com',
        icon: 'mail',
        action: () => Linking.openURL('mailto:info@prathibhasolutions.com'),
    },
    {
        id: 3,
        type: 'address',
        label: 'Address',
        value: 'Your Business Address\nCity, State - PIN',
        icon: 'location',
        action: null,
    },
    {
        id: 4,
        type: 'website',
        label: 'Website',
        value: 'www.prathibhasolutions.com',
        icon: 'globe',
        action: () => Linking.openURL('https://www.prathibhasolutions.com'),
    },
];

const BUSINESS_HOURS = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
];

export default function ContactScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.subtitle}>Get in touch with Prathibha Solutions</Text>

            {/* Contact Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                {CONTACT_INFO.map((contact) => (
                    <TouchableOpacity
                        key={contact.id}
                        style={styles.contactItem}
                        onPress={contact.action || undefined}
                        activeOpacity={contact.action ? 0.7 : 1}
                    >
                        <View style={styles.contactIcon}>
                            <Ionicons name={contact.icon as any} size={24} color="#00ffcc" />
                        </View>
                        <View style={styles.contactDetails}>
                            <Text style={styles.contactLabel}>{contact.label}</Text>
                            <Text style={styles.contactValue}>{contact.value}</Text>
                        </View>
                        {contact.action && (
                            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Business Hours */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Business Hours</Text>
                <View style={styles.hoursContainer}>
                    {BUSINESS_HOURS.map((schedule, index) => (
                        <View key={index} style={styles.hourItem}>
                            <Text style={styles.hourDay}>{schedule.day}</Text>
                            <Text style={styles.hourTime}>{schedule.time}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Services Overview */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                <View style={styles.servicesGrid}>
                    <View style={styles.serviceItem}>
                        <Ionicons name="desktop" size={32} color="#00ffcc" />
                        <Text style={styles.serviceName}>Website Development</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="phone-portrait" size={32} color="#00ffcc" />
                        <Text style={styles.serviceName}>Mobile Apps</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="color-palette" size={32} color="#00ffcc" />
                        <Text style={styles.serviceName}>UI/UX Design</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="trending-up" size={32} color="#00ffcc" />
                        <Text style={styles.serviceName}>Digital Marketing</Text>
                    </View>
                </View>
            </View>

            {/* Call to Action */}
            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
                <Text style={styles.ctaText}>
                    Contact us today for a free consultation and let's discuss how we can help your business grow online.
                </Text>
                <TouchableOpacity
                    style={styles.ctaButton}
                    onPress={() => Linking.openURL('tel:+91XXXXXXXXX')}
                >
                    <Ionicons name="call" size={20} color="#121212" />
                    <Text style={styles.ctaButtonText}>Call Now</Text>
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
        paddingBottom: 100, // Extra space for bottom tabs
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
        color: '#94a3b8',
        textAlign: 'center',
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ffcc',
        marginBottom: 16,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    contactIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#1e40af',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    contactDetails: {
        flex: 1,
    },
    contactLabel: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 4,
    },
    contactValue: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    hoursContainer: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
    },
    hourItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#475569',
    },
    hourDay: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    hourTime: {
        fontSize: 16,
        color: '#00ffcc',
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceItem: {
        width: '48%',
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceName: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginTop: 8,
        fontWeight: '500',
    },
    ctaSection: {
        backgroundColor: '#1e40af',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 20,
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