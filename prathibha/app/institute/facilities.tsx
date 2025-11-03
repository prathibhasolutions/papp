import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FACILITIES = [
    {
        category: 'Academic Facilities',
        items: [
            {
                name: 'Modern Classrooms',
                description: 'Air-conditioned classrooms with smart boards and audio-visual equipment',
                icon: 'desktop-outline',
            },
            {
                name: 'Computer Labs',
                description: 'State-of-the-art computer labs with latest software and high-speed internet',
                icon: 'laptop-outline',
            },
            {
                name: 'Digital Library',
                description: 'Extensive collection of books, journals, and online resources',
                icon: 'library-outline',
            },
            {
                name: 'Science Labs',
                description: 'Well-equipped physics, chemistry, and electronics laboratories',
                icon: 'flask-outline',
            },
        ],
    },
    {
        category: 'Infrastructure',
        items: [
            {
                name: 'Campus Building',
                description: 'Modern 5-story building with earthquake-resistant structure',
                icon: 'business-outline',
            },
            {
                name: 'Auditorium',
                description: '500-seat auditorium with modern sound and lighting systems',
                icon: 'mic-outline',
            },
            {
                name: 'Conference Halls',
                description: 'Multiple conference rooms for seminars and meetings',
                icon: 'people-outline',
            },
            {
                name: 'Parking',
                description: 'Spacious parking area for students and staff vehicles',
                icon: 'car-outline',
            },
        ],
    },
    {
        category: 'Student Amenities',
        items: [
            {
                name: 'Cafeteria',
                description: 'Hygienic cafeteria serving nutritious meals and snacks',
                icon: 'restaurant-outline',
            },
            {
                name: 'Recreation Room',
                description: 'Indoor games and recreational activities for students',
                icon: 'game-controller-outline',
            },
            {
                name: 'Medical Room',
                description: 'First aid facility with qualified medical staff',
                icon: 'medical-outline',
            },
            {
                name: 'Wi-Fi Campus',
                description: 'High-speed wireless internet coverage throughout the campus',
                icon: 'wifi-outline',
            },
        ],
    },
    {
        category: 'Support Services',
        items: [
            {
                name: 'Placement Cell',
                description: 'Dedicated placement assistance and career guidance',
                icon: 'briefcase-outline',
            },
            {
                name: 'Counseling Center',
                description: 'Academic and personal counseling services for students',
                icon: 'heart-outline',
            },
            {
                name: 'Security',
                description: '24/7 security with CCTV surveillance and trained personnel',
                icon: 'shield-outline',
            },
            {
                name: 'Transportation',
                description: 'Bus facility connecting major areas of the city',
                icon: 'bus-outline',
            },
        ],
    },
];

const CAMPUS_STATS = [
    { label: 'Total Area', value: '15 Acres', icon: 'resize-outline' },
    { label: 'Built-up Area', value: '2.5 Lakh Sq.ft', icon: 'home-outline' },
    { label: 'Classrooms', value: '45+', icon: 'school-outline' },
    { label: 'Laboratories', value: '25+', icon: 'flask-outline' },
];

export default function FacilitiesScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Campus Facilities</Text>
            <Text style={styles.subtitle}>
                World-class infrastructure and modern amenities for holistic education
            </Text>

            {/* Campus Statistics */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Campus at a Glance</Text>
                <View style={styles.statsGrid}>
                    {CAMPUS_STATS.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <Ionicons name={stat.icon as any} size={24} color="#6366f1" />
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Facilities by Category */}
            {FACILITIES.map((category, categoryIndex) => (
                <View key={categoryIndex} style={styles.section}>
                    <Text style={styles.sectionTitle}>{category.category}</Text>
                    <View style={styles.facilitiesGrid}>
                        {category.items.map((facility, facilityIndex) => (
                            <View key={facilityIndex} style={styles.facilityCard}>
                                <View style={styles.facilityHeader}>
                                    <Ionicons name={facility.icon as any} size={32} color="#6366f1" />
                                    <Text style={styles.facilityName}>{facility.name}</Text>
                                </View>
                                <Text style={styles.facilityDescription}>{facility.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}

            {/* Additional Features */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Choose Our Campus</Text>
                <View style={styles.featuresList}>
                    <View style={styles.featureItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#10b981" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Green Campus</Text>
                            <Text style={styles.featureDescription}>Eco-friendly campus with beautiful gardens and green spaces</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#10b981" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Accessibility</Text>
                            <Text style={styles.featureDescription}>Wheelchair accessible facilities and ramps throughout the campus</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#10b981" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Safe Environment</Text>
                            <Text style={styles.featureDescription}>Secure campus with round-the-clock security and safety measures</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#10b981" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Modern Technology</Text>
                            <Text style={styles.featureDescription}>Latest technology integration in all academic and administrative processes</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Future Developments */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Upcoming Developments</Text>
                <View style={styles.developmentCard}>
                    <Text style={styles.developmentText}>
                        We are continuously expanding our facilities to provide the best learning environment:
                    </Text>
                    <View style={styles.developmentList}>
                        <Text style={styles.developmentItem}>• New Research & Development Center</Text>
                        <Text style={styles.developmentItem}>• International Student Hostel</Text>
                        <Text style={styles.developmentItem}>• Innovation & Startup Incubation Center</Text>
                        <Text style={styles.developmentItem}>• Sports Complex with Indoor Stadium</Text>
                        <Text style={styles.developmentItem}>• Advanced Robotics & AI Laboratory</Text>
                    </View>
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
        lineHeight: 24,
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
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    statCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        width: '48%',
        minHeight: 100,
        justifyContent: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: '#94a3b8',
        textAlign: 'center',
    },
    facilitiesGrid: {
        gap: 16,
    },
    facilityCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#475569',
    },
    facilityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 16,
    },
    facilityName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
    },
    facilityDescription: {
        fontSize: 15,
        color: '#cbd5e1',
        lineHeight: 22,
    },
    featuresList: {
        gap: 16,
    },
    featureItem: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    featureContent: {
        flex: 1,
        marginLeft: 16,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    featureDescription: {
        fontSize: 14,
        color: '#cbd5e1',
        lineHeight: 20,
    },
    developmentCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
    },
    developmentText: {
        fontSize: 16,
        color: '#cbd5e1',
        marginBottom: 16,
        lineHeight: 24,
    },
    developmentList: {
        gap: 8,
    },
    developmentItem: {
        fontSize: 15,
        color: '#94a3b8',
        lineHeight: 22,
    },
});