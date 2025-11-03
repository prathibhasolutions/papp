import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CONTACT_INFO = [
    {
        id: 1,
        type: 'phone',
        title: 'Phone Numbers',
        items: [
            { label: 'Main Line', value: '+91 93477 49024', action: () => Linking.openURL('tel:+919347749024') },
            { label: 'Emergency', value: '+91 93477 49024', action: () => Linking.openURL('tel:+919347749024') },
        ],
        icon: 'call-outline',
    },
    {
        id: 2,
        type: 'whatsapp',
        title: 'WhatsApp',
        items: [
            {
                label: 'WhatsApp Support',
                value: '+91 93477 49024',
                action: () => Linking.openURL('https://api.whatsapp.com/send?phone=919347749024&text=Hello,%20I%20need%20home%20service%20help')
            },
        ],
        icon: 'logo-whatsapp',
    },
    {
        id: 3,
        type: 'email',
        title: 'Email',
        items: [
            { label: 'General Enquiry', value: 'info@prathibhaservices.com', action: () => Linking.openURL('mailto:info@prathibhaservices.com') },
            { label: 'Service Booking', value: 'bookings@prathibhaservices.com', action: () => Linking.openURL('mailto:bookings@prathibhaservices.com') },
        ],
        icon: 'mail-outline',
    },
    {
        id: 4,
        type: 'location',
        title: 'Service Area',
        items: [
            {
                label: 'Primary Location',
                value: 'Nizamabad, Telangana\nIndia',
                action: () => Linking.openURL('https://maps.google.com/?q=Nizamabad+Telangana')
            },
        ],
        icon: 'location-outline',
    },
];

const SERVICE_HOURS = [
    { day: 'Monday - Saturday', time: '8:00 AM - 8:00 PM', type: 'working' },
    { day: 'Sunday', time: '9:00 AM - 6:00 PM', type: 'working' },
    { day: 'Emergency Services', time: '24/7 Available', type: 'emergency' },
];

const SERVICE_CATEGORIES = [
    {
        name: 'Plumbing Services',
        contact: 'Available 24/7',
        description: 'Leak repairs, pipe installations, drainage solutions',
    },
    {
        name: 'Electrical Services',
        contact: 'Same Day Service',
        description: 'Wiring, installations, safety inspections',
    },
    {
        name: 'Carpentry Work',
        contact: 'Custom Solutions',
        description: 'Furniture repair, custom woodwork, installations',
    },
    {
        name: 'Painting Services',
        contact: 'Interior & Exterior',
        description: 'Wall painting, texture work, color consultation',
    },
    {
        name: 'Appliance Repair',
        contact: 'Quick Response',
        description: 'Geyser, washing machine, refrigerator, water purifier',
    },
    {
        name: 'House Shifting',
        contact: 'Professional Moving',
        description: 'Packing, transportation, unpacking services',
    },
];

export default function ContactScreen() {
    const handleWhatsApp = () => {
        Linking.openURL('https://api.whatsapp.com/send?phone=919347749024&text=Hello,%20I%20need%20home%20service%20help');
    };

    const handleCall = () => {
        Linking.openURL('tel:+919347749024');
    };

    const handleBookService = () => {
        Linking.openURL('https://api.whatsapp.com/send?phone=919347749024&text=I%20would%20like%20to%20book%20a%20service');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Contact Prathibha Services</Text>
            <Text style={styles.subtitle}>
                Get in touch for all your home service needs
            </Text>

            {/* Quick Actions */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick Contact</Text>
                <View style={styles.quickActions}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
                        <Ionicons name="call-outline" size={24} color="#fff" />
                        <Text style={styles.actionButtonText}>Call Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
                        <Ionicons name="logo-whatsapp" size={24} color="#fff" />
                        <Text style={styles.actionButtonText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Contact Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                {CONTACT_INFO.map((category) => (
                    <View key={category.id} style={styles.contactCategory}>
                        <View style={styles.categoryHeader}>
                            <Ionicons name={category.icon as any} size={24} color="#ff6b35" />
                            <Text style={styles.categoryTitle}>{category.title}</Text>
                        </View>
                        {category.items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.contactItem}
                                onPress={item.action || undefined}
                            >
                                <View style={styles.contactItemContent}>
                                    <Text style={styles.contactLabel}>{item.label}</Text>
                                    <Text style={styles.contactValue}>{item.value}</Text>
                                </View>
                                <Ionicons name="chevron-forward-outline" size={20} color="#ddd" />
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>

            {/* Service Hours */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Service Hours</Text>
                <View style={styles.hoursCard}>
                    {SERVICE_HOURS.map((schedule, index) => (
                        <View key={index} style={styles.scheduleItem}>
                            <Text style={styles.scheduleDay}>{schedule.day}</Text>
                            <Text style={[
                                styles.scheduleTime,
                                schedule.type === 'emergency' ? styles.emergencyTime : styles.workingTime
                            ]}>
                                {schedule.time}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Service Categories */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                {SERVICE_CATEGORIES.map((service, index) => (
                    <View key={index} style={styles.serviceCard}>
                        <View style={styles.serviceHeader}>
                            <Text style={styles.serviceName}>{service.name}</Text>
                            <Text style={styles.serviceContact}>{service.contact}</Text>
                        </View>
                        <Text style={styles.serviceDescription}>{service.description}</Text>
                    </View>
                ))}
            </View>

            {/* Booking Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Book a Service</Text>
                <View style={styles.bookingCard}>
                    <Text style={styles.bookingTitle}>Ready to book a service?</Text>
                    <Text style={styles.bookingText}>
                        Contact us through WhatsApp or call for immediate assistance.
                        We provide quick response and professional service.
                    </Text>

                    <TouchableOpacity style={styles.bookingButton} onPress={handleBookService}>
                        <Ionicons name="calendar-outline" size={20} color="#fff" />
                        <Text style={styles.bookingButtonText}>Book Service Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Service Area */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Service Coverage</Text>
                <View style={styles.coverageCard}>
                    <View style={styles.coverageHeader}>
                        <Ionicons name="location-outline" size={24} color="#ff6b35" />
                        <Text style={styles.coverageTitle}>Nizamabad & Surrounding Areas</Text>
                    </View>
                    <Text style={styles.coverageText}>
                        We provide home services across Nizamabad city and nearby areas in Telangana.
                        Our local team ensures quick response times and reliable service delivery.
                    </Text>

                    <View style={styles.coverageFeatures}>
                        <View style={styles.featureItem}>
                            <Ionicons name="time-outline" size={16} color="#ff6b35" />
                            <Text style={styles.featureText}>Same-day service available</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="shield-checkmark-outline" size={16} color="#ff6b35" />
                            <Text style={styles.featureText}>Verified and trained professionals</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle-outline" size={16} color="#ff6b35" />
                            <Text style={styles.featureText}>Quality guarantee on all work</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Emergency Contact */}
            <View style={styles.section}>
                <View style={styles.emergencyCard}>
                    <View style={styles.emergencyHeader}>
                        <Ionicons name="warning-outline" size={24} color="#ef4444" />
                        <Text style={styles.emergencyTitle}>Emergency Services</Text>
                    </View>
                    <Text style={styles.emergencyText}>
                        For urgent plumbing or electrical emergencies, contact us immediately:
                    </Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => Linking.openURL('tel:+919347749024')}
                    >
                        <Ionicons name="call-outline" size={20} color="#fff" />
                        <Text style={styles.emergencyButtonText}>Emergency: +91 93477 49024</Text>
                    </TouchableOpacity>
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
    quickActions: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#ff6b35',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    whatsappButton: {
        flex: 1,
        backgroundColor: '#25d366',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    contactCategory: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 12,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#333',
        marginBottom: 8,
    },
    contactItemContent: {
        flex: 1,
    },
    contactLabel: {
        fontSize: 14,
        color: '#ddd',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    hoursCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    scheduleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    scheduleDay: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    scheduleTime: {
        fontSize: 16,
        fontWeight: '600',
    },
    workingTime: {
        color: '#10b981',
    },
    emergencyTime: {
        color: '#ef4444',
    },
    serviceCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
    },
    serviceContact: {
        fontSize: 12,
        color: '#ff6b35',
        fontWeight: '600',
    },
    serviceDescription: {
        fontSize: 14,
        color: '#ddd',
        lineHeight: 20,
    },
    bookingCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff6b35',
    },
    bookingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    bookingText: {
        fontSize: 16,
        color: '#ddd',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    bookingButton: {
        backgroundColor: '#ff6b35',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    bookingButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    coverageCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    coverageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    coverageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    coverageText: {
        fontSize: 16,
        color: '#ddd',
        lineHeight: 24,
        marginBottom: 16,
    },
    coverageFeatures: {
        gap: 8,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    featureText: {
        fontSize: 14,
        color: '#ddd',
    },
    emergencyCard: {
        backgroundColor: '#7f1d1d',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ef4444',
    },
    emergencyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    emergencyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    emergencyText: {
        fontSize: 16,
        color: '#fecaca',
        marginBottom: 16,
    },
    emergencyButton: {
        backgroundColor: '#ef4444',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    emergencyButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});