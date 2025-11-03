import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CONTACT_INFO = [
    {
        id: 1,
        type: 'phone',
        title: 'Phone Numbers',
        items: [
            { label: 'Main Office', value: '+91 40 1234 5678', action: () => Linking.openURL('tel:+914012345678') },
            { label: 'Admissions', value: '+91 98765 43210', action: () => Linking.openURL('tel:+919876543210') },
            { label: 'Principal Office', value: '+91 98765 43211', action: () => Linking.openURL('tel:+919876543211') },
        ],
        icon: 'call-outline',
    },
    {
        id: 2,
        type: 'email',
        title: 'Email Addresses',
        items: [
            { label: 'General Enquiry', value: 'info@prathibhainstitute.com', action: () => Linking.openURL('mailto:info@prathibhainstitute.com') },
            { label: 'Admissions', value: 'admissions@prathibhainstitute.com', action: () => Linking.openURL('mailto:admissions@prathibhainstitute.com') },
            { label: 'Principal', value: 'principal@prathibhainstitute.com', action: () => Linking.openURL('mailto:principal@prathibhainstitute.com') },
            { label: 'Academic Office', value: 'academic@prathibhainstitute.com', action: () => Linking.openURL('mailto:academic@prathibhainstitute.com') },
        ],
        icon: 'mail-outline',
    },
    {
        id: 3,
        type: 'location',
        title: 'Campus Address',
        items: [
            {
                label: 'Main Campus',
                value: 'Prathibha Institute of Technology\nSurvey No. 123, Kompally Village\nMedchal-Malkajgiri District\nTelangana - 500014\nIndia',
                action: () => Linking.openURL('https://maps.google.com/?q=Prathibha+Institute+Kompally+Telangana')
            },
        ],
        icon: 'location-outline',
    },
];

const OFFICE_HOURS = [
    { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM', type: 'working' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', type: 'working' },
    { day: 'Sunday', time: 'Closed', type: 'closed' },
];

const DEPARTMENTS_CONTACT = [
    {
        name: 'Academic Office',
        contact: '+91 40 1234 5679',
        email: 'academic@prathibhainstitute.com',
        timing: 'Mon-Fri: 9:00 AM - 5:00 PM',
    },
    {
        name: 'Admissions Office',
        contact: '+91 98765 43210',
        email: 'admissions@prathibhainstitute.com',
        timing: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
        name: 'Accounts Office',
        contact: '+91 40 1234 5680',
        email: 'accounts@prathibhainstitute.com',
        timing: 'Mon-Fri: 9:30 AM - 4:30 PM',
    },
    {
        name: 'Student Affairs',
        contact: '+91 40 1234 5681',
        email: 'students@prathibhainstitute.com',
        timing: 'Mon-Fri: 9:00 AM - 5:00 PM',
    },
    {
        name: 'Placement Cell',
        contact: '+91 40 1234 5682',
        email: 'placements@prathibhainstitute.com',
        timing: 'Mon-Fri: 10:00 AM - 4:00 PM',
    },
];

const QUICK_LINKS = [
    { title: 'Virtual Campus Tour', action: () => Linking.openURL('https://prathibhainstitute.com/virtual-tour') },
    { title: 'Download Brochure', action: () => Linking.openURL('https://prathibhainstitute.com/brochure.pdf') },
    { title: 'Online Application', action: () => Linking.openURL('https://prathibhainstitute.com/apply') },
    { title: 'Student Portal', action: () => Linking.openURL('https://prathibhainstitute.com/student-portal') },
];

export default function ContactScreen() {
    const handleGetDirections = () => {
        Linking.openURL('https://maps.google.com/?q=Prathibha+Institute+Kompally+Telangana&navigate=yes');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.subtitle}>
                Get in touch with Prathibha Institute of Technology
            </Text>

            {/* Main Contact Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                {CONTACT_INFO.map((category) => (
                    <View key={category.id} style={styles.contactCategory}>
                        <View style={styles.categoryHeader}>
                            <Ionicons name={category.icon as any} size={24} color="#6366f1" />
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
                                <Ionicons name="chevron-forward-outline" size={20} color="#94a3b8" />
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>

            {/* Office Hours */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Office Hours</Text>
                <View style={styles.hoursCard}>
                    {OFFICE_HOURS.map((schedule, index) => (
                        <View key={index} style={styles.scheduleItem}>
                            <Text style={styles.scheduleDay}>{schedule.day}</Text>
                            <Text style={[
                                styles.scheduleTime,
                                schedule.type === 'closed' ? styles.closedTime : styles.workingTime
                            ]}>
                                {schedule.time}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Department Contacts */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Department Contacts</Text>
                {DEPARTMENTS_CONTACT.map((dept, index) => (
                    <View key={index} style={styles.deptCard}>
                        <Text style={styles.deptName}>{dept.name}</Text>
                        <View style={styles.deptDetails}>
                            <TouchableOpacity
                                style={styles.deptContact}
                                onPress={() => Linking.openURL(`tel:${dept.contact}`)}
                            >
                                <Ionicons name="call-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptContactText}>{dept.contact}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.deptContact}
                                onPress={() => Linking.openURL(`mailto:${dept.email}`)}
                            >
                                <Ionicons name="mail-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptContactText}>{dept.email}</Text>
                            </TouchableOpacity>

                            <View style={styles.deptContact}>
                                <Ionicons name="time-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptContactText}>{dept.timing}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            {/* Quick Actions */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick Actions</Text>
                <View style={styles.quickActions}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleGetDirections}>
                        <Ionicons name="navigate-outline" size={24} color="#fff" />
                        <Text style={styles.actionButtonText}>Get Directions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => Linking.openURL('tel:+914012345678')}
                    >
                        <Ionicons name="call-outline" size={24} color="#fff" />
                        <Text style={styles.actionButtonText}>Call Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Quick Links */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick Links</Text>
                <View style={styles.quickLinksContainer}>
                    {QUICK_LINKS.map((link, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.quickLinkItem}
                            onPress={link.action}
                        >
                            <Text style={styles.quickLinkText}>{link.title}</Text>
                            <Ionicons name="open-outline" size={20} color="#6366f1" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Emergency Contact */}
            <View style={styles.section}>
                <View style={styles.emergencyCard}>
                    <View style={styles.emergencyHeader}>
                        <Ionicons name="warning-outline" size={24} color="#ef4444" />
                        <Text style={styles.emergencyTitle}>Emergency Contact</Text>
                    </View>
                    <Text style={styles.emergencyText}>
                        For any emergency situations on campus:
                    </Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => Linking.openURL('tel:+919999999999')}
                    >
                        <Ionicons name="call-outline" size={20} color="#fff" />
                        <Text style={styles.emergencyButtonText}>Emergency: +91 99999 99999</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Social Media */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Follow Us</Text>
                <Text style={styles.socialText}>
                    Stay connected with us on social media for latest updates
                </Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={() => Linking.openURL('https://facebook.com/prathibhainstitute')}
                    >
                        <Ionicons name="logo-facebook" size={24} color="#1877f2" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={() => Linking.openURL('https://twitter.com/prathibhainstitute')}
                    >
                        <Ionicons name="logo-twitter" size={24} color="#1da1f2" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={() => Linking.openURL('https://linkedin.com/company/prathibhainstitute')}
                    >
                        <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={() => Linking.openURL('https://instagram.com/prathibhainstitute')}
                    >
                        <Ionicons name="logo-instagram" size={24} color="#e4405f" />
                    </TouchableOpacity>
                </View>
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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6366f1',
        marginBottom: 16,
    },
    contactCategory: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
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
        backgroundColor: '#475569',
        marginBottom: 8,
    },
    contactItemContent: {
        flex: 1,
    },
    contactLabel: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    hoursCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
    },
    scheduleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#475569',
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
    closedTime: {
        color: '#ef4444',
    },
    deptCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    deptName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    deptDetails: {
        gap: 8,
    },
    deptContact: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    deptContactText: {
        fontSize: 14,
        color: '#cbd5e1',
        flex: 1,
    },
    quickActions: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#6366f1',
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
    quickLinksContainer: {
        gap: 8,
    },
    quickLinkItem: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quickLinkText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
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
    socialText: {
        fontSize: 16,
        color: '#cbd5e1',
        marginBottom: 16,
        textAlign: 'center',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#334155',
        justifyContent: 'center',
        alignItems: 'center',
    },
});