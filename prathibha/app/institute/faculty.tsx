import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FACULTY_MEMBERS = [
    {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        designation: 'Principal & Director',
        department: 'Computer Science',
        qualification: 'Ph.D in Computer Science',
        experience: '15 Years',
        specialization: 'Data Structures, Algorithms, Database Management',
        image: null, // Add image path when available
    },
    {
        id: 2,
        name: 'Prof. Priya Sharma',
        designation: 'Head of Department - IT',
        department: 'Information Technology',
        qualification: 'M.Tech in Software Engineering',
        experience: '12 Years',
        specialization: 'Software Engineering, Web Development, Mobile Applications',
        image: null,
    },
    {
        id: 3,
        name: 'Dr. Suresh Reddy',
        designation: 'Senior Faculty',
        department: 'Electronics & Communication',
        qualification: 'Ph.D in Electronics Engineering',
        experience: '18 Years',
        specialization: 'Digital Electronics, Communication Systems, VLSI Design',
        image: null,
    },
    {
        id: 4,
        name: 'Mrs. Kavitha Rani',
        designation: 'Associate Professor',
        department: 'Computer Applications',
        qualification: 'MCA, M.Phil in Computer Science',
        experience: '10 Years',
        specialization: 'Programming Languages, System Analysis, Project Management',
        image: null,
    },
];

const DEPARTMENTS = [
    {
        name: 'Computer Science Engineering',
        hod: 'Dr. Rajesh Kumar',
        faculty: 8,
        courses: ['B.Tech CSE', 'M.Tech CSE'],
    },
    {
        name: 'Information Technology',
        hod: 'Prof. Priya Sharma',
        faculty: 6,
        courses: ['B.Tech IT', 'MCA'],
    },
    {
        name: 'Electronics & Communication',
        hod: 'Dr. Suresh Reddy',
        faculty: 7,
        courses: ['B.Tech ECE', 'Diploma ECE'],
    },
    {
        name: 'Computer Applications',
        hod: 'Mrs. Kavitha Rani',
        faculty: 5,
        courses: ['MCA', 'BCA', 'PG Diploma'],
    },
];

export default function FacultyScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Our Faculty</Text>
            <Text style={styles.subtitle}>
                Meet our experienced and qualified faculty members
            </Text>

            {/* Faculty Members */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Faculty Members</Text>
                {FACULTY_MEMBERS.map((faculty) => (
                    <View key={faculty.id} style={styles.facultyCard}>
                        <View style={styles.facultyHeader}>
                            <View style={styles.facultyImageContainer}>
                                {faculty.image ? (
                                    <Image source={faculty.image} style={styles.facultyImage} />
                                ) : (
                                    <View style={styles.placeholderImage}>
                                        <Ionicons name="person" size={40} color="#6366f1" />
                                    </View>
                                )}
                            </View>
                            <View style={styles.facultyInfo}>
                                <Text style={styles.facultyName}>{faculty.name}</Text>
                                <Text style={styles.facultyDesignation}>{faculty.designation}</Text>
                                <Text style={styles.facultyDepartment}>{faculty.department}</Text>
                            </View>
                        </View>

                        <View style={styles.facultyDetails}>
                            <View style={styles.detailRow}>
                                <Ionicons name="school-outline" size={16} color="#6366f1" />
                                <Text style={styles.detailText}>{faculty.qualification}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Ionicons name="time-outline" size={16} color="#6366f1" />
                                <Text style={styles.detailText}>{faculty.experience} Experience</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Ionicons name="bulb-outline" size={16} color="#6366f1" />
                                <Text style={styles.detailText}>{faculty.specialization}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            {/* Departments */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Departments</Text>
                {DEPARTMENTS.map((dept, index) => (
                    <View key={index} style={styles.departmentCard}>
                        <Text style={styles.departmentName}>{dept.name}</Text>
                        <View style={styles.departmentInfo}>
                            <View style={styles.deptDetailRow}>
                                <Ionicons name="person-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptDetailText}>HOD: {dept.hod}</Text>
                            </View>
                            <View style={styles.deptDetailRow}>
                                <Ionicons name="people-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptDetailText}>Faculty: {dept.faculty} Members</Text>
                            </View>
                            <View style={styles.deptDetailRow}>
                                <Ionicons name="book-outline" size={16} color="#6366f1" />
                                <Text style={styles.deptDetailText}>Courses: {dept.courses.join(', ')}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            {/* Faculty Features */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Our Faculty is Special</Text>
                <View style={styles.featuresList}>
                    <View style={styles.featureItem}>
                        <Ionicons name="medal-outline" size={24} color="#6366f1" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Experienced Professionals</Text>
                            <Text style={styles.featureDescription}>Our faculty has extensive industry and academic experience</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="school-outline" size={24} color="#6366f1" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Highly Qualified</Text>
                            <Text style={styles.featureDescription}>Ph.D and M.Tech qualified professionals from top universities</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="bulb-outline" size={24} color="#6366f1" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Industry Experts</Text>
                            <Text style={styles.featureDescription}>Regular training and industry exposure for practical knowledge</Text>
                        </View>
                    </View>

                    <View style={styles.featureItem}>
                        <Ionicons name="heart-outline" size={24} color="#6366f1" />
                        <View style={styles.featureContent}>
                            <Text style={styles.featureTitle}>Student-Friendly</Text>
                            <Text style={styles.featureDescription}>Dedicated to student success with personalized attention</Text>
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
    facultyCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#475569',
    },
    facultyHeader: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    facultyImageContainer: {
        marginRight: 16,
    },
    facultyImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    placeholderImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#475569',
        justifyContent: 'center',
        alignItems: 'center',
    },
    facultyInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    facultyName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    facultyDesignation: {
        fontSize: 16,
        color: '#6366f1',
        marginBottom: 4,
    },
    facultyDepartment: {
        fontSize: 14,
        color: '#94a3b8',
    },
    facultyDetails: {
        gap: 8,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    detailText: {
        fontSize: 14,
        color: '#cbd5e1',
        flex: 1,
    },
    departmentCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    departmentName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    departmentInfo: {
        gap: 8,
    },
    deptDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    deptDetailText: {
        fontSize: 14,
        color: '#cbd5e1',
        flex: 1,
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
});