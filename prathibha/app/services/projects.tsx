import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RECENT_PROJECTS = [
    {
        id: 1,
        title: 'Complete Home Renovation',
        location: 'Nizamabad, Residential Area',
        services: ['Plumbing', 'Electrical', 'Painting', 'Carpentry'],
        description: 'Full home renovation including electrical rewiring, plumbing upgrades, interior painting, and custom furniture work.',
        image: null, // Add image when available
        completion: 'Completed in 15 days',
        customerFeedback: 'Excellent work quality and timely completion.',
    },
    {
        id: 2,
        title: 'Kitchen Appliance Setup',
        location: 'Nizamabad, Apartment Complex',
        services: ['Geyser Installation', 'Water Purifier Setup', 'Electrical Work'],
        description: 'Installation of new geyser, water purifier, and electrical connections for modern kitchen setup.',
        image: null,
        completion: 'Completed in 2 days',
        customerFeedback: 'Professional service with attention to detail.',
    },
    {
        id: 3,
        title: 'Office Shifting Service',
        location: 'Nizamabad to Hyderabad',
        services: ['Logistics', 'Packing', 'Transportation'],
        description: 'Complete office relocation service including careful packing, transportation, and setup at new location.',
        image: null,
        completion: 'Completed in 3 days',
        customerFeedback: 'Smooth and hassle-free moving experience.',
    },
    {
        id: 4,
        title: 'Bathroom Renovation',
        location: 'Nizamabad, Independent House',
        services: ['Plumbing', 'Tiles Work', 'Electrical'],
        description: 'Complete bathroom renovation with modern fixtures, tiling work, and electrical installations.',
        image: null,
        completion: 'Completed in 8 days',
        customerFeedback: 'Transformed our bathroom beyond expectations.',
    },
];

const PROJECT_STATS = [
    { icon: 'checkmark-circle-outline', value: '500+', label: 'Projects Completed' },
    { icon: 'happy-outline', value: '98%', label: 'Customer Satisfaction' },
    { icon: 'people-outline', value: '450+', label: 'Happy Customers' },
    { icon: 'time-outline', value: '24/7', label: 'Service Support' },
];

const SERVICE_HIGHLIGHTS = [
    {
        title: 'Residential Services',
        projects: '300+',
        description: 'Home repairs, renovations, and maintenance services',
        icon: 'home-outline',
    },
    {
        title: 'Commercial Projects',
        projects: '150+',
        description: 'Office spaces, shops, and commercial property services',
        icon: 'business-outline',
    },
    {
        title: 'Emergency Repairs',
        projects: '200+',
        description: 'Urgent plumbing, electrical, and appliance repairs',
        icon: 'flash-outline',
    },
    {
        title: 'Moving Services',
        projects: '100+',
        description: 'House shifting and logistics services',
        icon: 'cube-outline',
    },
];

export default function ProjectsScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Our Projects</Text>
            <Text style={styles.subtitle}>
                Showcasing our quality work and satisfied customers
            </Text>

            {/* Project Statistics */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Achievement</Text>
                <View style={styles.statsContainer}>
                    {PROJECT_STATS.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <Ionicons name={stat.icon as any} size={32} color="#ff6b35" />
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Service Categories */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Service Categories</Text>
                <View style={styles.categoriesGrid}>
                    {SERVICE_HIGHLIGHTS.map((category, index) => (
                        <View key={index} style={styles.categoryCard}>
                            <Ionicons name={category.icon as any} size={40} color="#ff6b35" />
                            <Text style={styles.categoryTitle}>{category.title}</Text>
                            <Text style={styles.categoryProjects}>{category.projects}</Text>
                            <Text style={styles.categoryDescription}>{category.description}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Recent Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Projects</Text>
                {RECENT_PROJECTS.map((project) => (
                    <View key={project.id} style={styles.projectCard}>
                        <View style={styles.projectHeader}>
                            <View style={styles.projectImageContainer}>
                                {project.image ? (
                                    <Image source={project.image} style={styles.projectImage} />
                                ) : (
                                    <View style={styles.placeholderImage}>
                                        <Ionicons name="image-outline" size={40} color="#ff6b35" />
                                    </View>
                                )}
                            </View>
                            <View style={styles.projectInfo}>
                                <Text style={styles.projectTitle}>{project.title}</Text>
                                <View style={styles.projectLocation}>
                                    <Ionicons name="location-outline" size={16} color="#ff6b35" />
                                    <Text style={styles.locationText}>{project.location}</Text>
                                </View>
                                <Text style={styles.projectCompletion}>{project.completion}</Text>
                            </View>
                        </View>

                        <Text style={styles.projectDescription}>{project.description}</Text>

                        <View style={styles.servicesUsed}>
                            <Text style={styles.servicesLabel}>Services:</Text>
                            <View style={styles.servicesTags}>
                                {project.services.map((service, index) => (
                                    <View key={index} style={styles.serviceTag}>
                                        <Text style={styles.serviceTagText}>{service}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.customerFeedback}>
                            <Ionicons name="chatbubble-outline" size={16} color="#ff6b35" />
                            <Text style={styles.feedbackText}>"{project.customerFeedback}"</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Quality Assurance */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Quality Promise</Text>
                <View style={styles.qualityCard}>
                    <View style={styles.qualityItem}>
                        <Ionicons name="shield-checkmark-outline" size={24} color="#ff6b35" />
                        <View style={styles.qualityContent}>
                            <Text style={styles.qualityTitle}>Quality Materials</Text>
                            <Text style={styles.qualityDescription}>We use only high-quality, branded materials for all our projects</Text>
                        </View>
                    </View>

                    <View style={styles.qualityItem}>
                        <Ionicons name="people-outline" size={24} color="#ff6b35" />
                        <View style={styles.qualityContent}>
                            <Text style={styles.qualityTitle}>Skilled Professionals</Text>
                            <Text style={styles.qualityDescription}>Our team consists of experienced and trained technicians</Text>
                        </View>
                    </View>

                    <View style={styles.qualityItem}>
                        <Ionicons name="time-outline" size={24} color="#ff6b35" />
                        <View style={styles.qualityContent}>
                            <Text style={styles.qualityTitle}>Timely Completion</Text>
                            <Text style={styles.qualityDescription}>We respect your time and complete projects as scheduled</Text>
                        </View>
                    </View>

                    <View style={styles.qualityItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#ff6b35" />
                        <View style={styles.qualityContent}>
                            <Text style={styles.qualityTitle}>Warranty Support</Text>
                            <Text style={styles.qualityDescription}>We provide warranty on our work for your peace of mind</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Call to Action */}
            <View style={styles.section}>
                <View style={styles.ctaCard}>
                    <Text style={styles.ctaTitle}>Ready for Your Next Project?</Text>
                    <Text style={styles.ctaText}>
                        Let us help you transform your space with our professional services.
                        Contact us today for a free consultation and quote.
                    </Text>
                    <View style={styles.ctaButtons}>
                        <View style={styles.ctaButton}>
                            <Ionicons name="call-outline" size={20} color="#fff" />
                            <Text style={styles.ctaButtonText}>Get Quote</Text>
                        </View>
                        <View style={styles.ctaButton}>
                            <Ionicons name="chatbubble-outline" size={20} color="#fff" />
                            <Text style={styles.ctaButtonText}>Discuss Project</Text>
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
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    statCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        width: '48%',
        minHeight: 100,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#ddd',
        textAlign: 'center',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    categoryCard: {
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
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
        marginBottom: 4,
        textAlign: 'center',
    },
    categoryProjects: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 8,
    },
    categoryDescription: {
        fontSize: 12,
        color: '#ddd',
        textAlign: 'center',
        lineHeight: 16,
    },
    projectCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
    },
    projectHeader: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    projectImageContainer: {
        marginRight: 16,
    },
    projectImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    placeholderImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    projectInfo: {
        flex: 1,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    projectLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 4,
    },
    locationText: {
        fontSize: 14,
        color: '#ddd',
    },
    projectCompletion: {
        fontSize: 14,
        color: '#10b981',
        fontWeight: '600',
    },
    projectDescription: {
        fontSize: 14,
        color: '#ddd',
        lineHeight: 20,
        marginBottom: 16,
    },
    servicesUsed: {
        marginBottom: 16,
    },
    servicesLabel: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 8,
    },
    servicesTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    serviceTag: {
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    serviceTagText: {
        fontSize: 12,
        color: '#ff6b35',
        fontWeight: '500',
    },
    customerFeedback: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        backgroundColor: '#333',
        padding: 12,
        borderRadius: 8,
    },
    feedbackText: {
        fontSize: 14,
        color: '#ddd',
        fontStyle: 'italic',
        flex: 1,
        lineHeight: 20,
    },
    qualityCard: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    qualityItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        gap: 12,
    },
    qualityContent: {
        flex: 1,
    },
    qualityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    qualityDescription: {
        fontSize: 14,
        color: '#ddd',
        lineHeight: 20,
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