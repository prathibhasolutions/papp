import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ADMISSION_PROCESS = [
    {
        step: 1,
        title: 'Application Form',
        description: 'Fill the online application form or collect physical form from the institute',
        icon: 'document-text-outline',
    },
    {
        step: 2,
        title: 'Document Submission',
        description: 'Submit required documents along with the application form',
        icon: 'folder-outline',
    },
    {
        step: 3,
        title: 'Entrance Test/Merit',
        description: 'Appear for entrance test or merit-based selection as applicable',
        icon: 'school-outline',
    },
    {
        step: 4,
        title: 'Counseling',
        description: 'Attend counseling session for course and branch selection',
        icon: 'people-outline',
    },
    {
        step: 5,
        title: 'Fee Payment',
        description: 'Pay the admission fee to confirm your seat',
        icon: 'card-outline',
    },
    {
        step: 6,
        title: 'Registration',
        description: 'Complete the registration process and start your academic journey',
        icon: 'checkmark-circle-outline',
    },
];

const COURSES_OFFERED = [
    {
        category: 'Engineering',
        courses: [
            { name: 'B.Tech Computer Science Engineering', duration: '4 Years', seats: 60 },
            { name: 'B.Tech Information Technology', duration: '4 Years', seats: 60 },
            { name: 'B.Tech Electronics & Communication', duration: '4 Years', seats: 60 },
            { name: 'M.Tech Computer Science', duration: '2 Years', seats: 18 },
        ],
    },
    {
        category: 'Computer Applications',
        courses: [
            { name: 'Master of Computer Applications (MCA)', duration: '2 Years', seats: 60 },
            { name: 'Bachelor of Computer Applications (BCA)', duration: '3 Years', seats: 60 },
            { name: 'PG Diploma in Computer Applications', duration: '1 Year', seats: 30 },
        ],
    },
    {
        category: 'Diploma',
        courses: [
            { name: 'Diploma in Computer Science', duration: '3 Years', seats: 60 },
            { name: 'Diploma in Electronics & Communication', duration: '3 Years', seats: 60 },
        ],
    },
];

const ELIGIBILITY_CRITERIA = [
    {
        course: 'B.Tech Courses',
        criteria: '12th with Physics, Chemistry, Mathematics (Min 50% for General, 45% for SC/ST)',
        entrance: 'JEE Main / State CET / Institute Entrance Test',
    },
    {
        course: 'MCA',
        criteria: 'Graduate with Mathematics at 10+2 or Graduation level (Min 50% aggregate)',
        entrance: 'NIMCET / State CET / Institute Entrance Test',
    },
    {
        course: 'BCA',
        criteria: '12th with Mathematics (Min 45% aggregate)',
        entrance: 'Merit-based admission',
    },
    {
        course: 'M.Tech',
        criteria: 'B.Tech/B.E in relevant branch (Min 50% aggregate)',
        entrance: 'GATE / State PG CET / Institute Test',
    },
    {
        course: 'Diploma',
        criteria: '10th Pass (Min 35% aggregate)',
        entrance: 'Merit-based admission',
    },
];

const IMPORTANT_DATES = [
    { event: 'Application Start Date', date: 'March 15, 2024', status: 'completed' },
    { event: 'Application Last Date', date: 'June 30, 2024', status: 'upcoming' },
    { event: 'Entrance Test', date: 'July 15, 2024', status: 'upcoming' },
    { event: 'Result Declaration', date: 'July 25, 2024', status: 'upcoming' },
    { event: 'Counseling Dates', date: 'August 1-15, 2024', status: 'upcoming' },
    { event: 'Classes Begin', date: 'August 20, 2024', status: 'upcoming' },
];

export default function AdmissionsScreen() {
    const handleContact = () => {
        Linking.openURL('tel:+919876543210');
    };

    const handleEmail = () => {
        Linking.openURL('mailto:admissions@prathibhainstitute.com');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Admissions 2024</Text>
            <Text style={styles.subtitle}>
                Join Prathibha Institute for Quality Technical Education
            </Text>

            {/* Courses Offered */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Courses Offered</Text>
                {COURSES_OFFERED.map((category, categoryIndex) => (
                    <View key={categoryIndex} style={styles.categoryCard}>
                        <Text style={styles.categoryTitle}>{category.category}</Text>
                        {category.courses.map((course, courseIndex) => (
                            <View key={courseIndex} style={styles.courseItem}>
                                <View style={styles.courseInfo}>
                                    <Text style={styles.courseName}>{course.name}</Text>
                                    <Text style={styles.courseDetails}>
                                        Duration: {course.duration} | Seats: {course.seats}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Eligibility Criteria */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
                {ELIGIBILITY_CRITERIA.map((item, index) => (
                    <View key={index} style={styles.eligibilityCard}>
                        <Text style={styles.eligibilityCourse}>{item.course}</Text>
                        <View style={styles.eligibilityRow}>
                            <Ionicons name="school-outline" size={16} color="#6366f1" />
                            <Text style={styles.eligibilityText}>{item.criteria}</Text>
                        </View>
                        <View style={styles.eligibilityRow}>
                            <Ionicons name="trophy-outline" size={16} color="#6366f1" />
                            <Text style={styles.eligibilityText}>{item.entrance}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Admission Process */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Admission Process</Text>
                {ADMISSION_PROCESS.map((step, index) => (
                    <View key={index} style={styles.processStep}>
                        <View style={styles.stepHeader}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepNumberText}>{step.step}</Text>
                            </View>
                            <Ionicons name={step.icon as any} size={24} color="#6366f1" style={styles.stepIcon} />
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>{step.title}</Text>
                            <Text style={styles.stepDescription}>{step.description}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Important Dates */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Important Dates</Text>
                {IMPORTANT_DATES.map((date, index) => (
                    <View key={index} style={styles.dateItem}>
                        <View style={[styles.dateStatus, date.status === 'completed' ? styles.completed : styles.upcoming]} />
                        <View style={styles.dateInfo}>
                            <Text style={styles.dateEvent}>{date.event}</Text>
                            <Text style={styles.dateValue}>{date.date}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Fee Structure */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Fee Structure (Annual)</Text>
                <View style={styles.feeCard}>
                    <View style={styles.feeItem}>
                        <Text style={styles.feeCategory}>B.Tech Courses</Text>
                        <Text style={styles.feeAmount}>₹85,000</Text>
                    </View>
                    <View style={styles.feeItem}>
                        <Text style={styles.feeCategory}>MCA</Text>
                        <Text style={styles.feeAmount}>₹65,000</Text>
                    </View>
                    <View style={styles.feeItem}>
                        <Text style={styles.feeCategory}>BCA</Text>
                        <Text style={styles.feeAmount}>₹45,000</Text>
                    </View>
                    <View style={styles.feeItem}>
                        <Text style={styles.feeCategory}>M.Tech</Text>
                        <Text style={styles.feeAmount}>₹75,000</Text>
                    </View>
                    <View style={styles.feeItem}>
                        <Text style={styles.feeCategory}>Diploma</Text>
                        <Text style={styles.feeAmount}>₹35,000</Text>
                    </View>
                </View>
                <Text style={styles.feeNote}>
                    * Fee includes tuition, library, laboratory, and development charges
                </Text>
            </View>

            {/* Contact Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Admission Enquiry</Text>
                <View style={styles.contactCard}>
                    <Text style={styles.contactText}>
                        For detailed information about admissions, please contact our admission office:
                    </Text>

                    <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
                        <Ionicons name="call-outline" size={20} color="#fff" />
                        <Text style={styles.contactButtonText}>Call: +91 98765 43210</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
                        <Ionicons name="mail-outline" size={20} color="#fff" />
                        <Text style={styles.contactButtonText}>Email: admissions@prathibhainstitute.com</Text>
                    </TouchableOpacity>

                    <View style={styles.timingInfo}>
                        <Ionicons name="time-outline" size={20} color="#6366f1" />
                        <View style={styles.timingText}>
                            <Text style={styles.timingTitle}>Office Hours:</Text>
                            <Text style={styles.timingDetails}>Monday - Saturday: 9:00 AM - 5:00 PM</Text>
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
    categoryCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6366f1',
        marginBottom: 12,
    },
    courseItem: {
        borderLeftWidth: 3,
        borderLeftColor: '#6366f1',
        paddingLeft: 12,
        marginBottom: 8,
    },
    courseInfo: {
        flex: 1,
    },
    courseName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    courseDetails: {
        fontSize: 14,
        color: '#94a3b8',
    },
    eligibilityCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    eligibilityCourse: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    eligibilityRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        gap: 8,
    },
    eligibilityText: {
        fontSize: 14,
        color: '#cbd5e1',
        flex: 1,
        lineHeight: 20,
    },
    processStep: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
    },
    stepHeader: {
        marginRight: 16,
        alignItems: 'center',
    },
    stepNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#6366f1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepNumberText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    stepIcon: {
        marginTop: 4,
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
    dateItem: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateStatus: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 16,
    },
    completed: {
        backgroundColor: '#10b981',
    },
    upcoming: {
        backgroundColor: '#f59e0b',
    },
    dateInfo: {
        flex: 1,
    },
    dateEvent: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 2,
    },
    dateValue: {
        fontSize: 14,
        color: '#94a3b8',
    },
    feeCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 16,
    },
    feeItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#475569',
    },
    feeCategory: {
        fontSize: 16,
        color: '#fff',
    },
    feeAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6366f1',
    },
    feeNote: {
        fontSize: 12,
        color: '#94a3b8',
        fontStyle: 'italic',
        marginTop: 8,
    },
    contactCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
    },
    contactText: {
        fontSize: 16,
        color: '#cbd5e1',
        marginBottom: 20,
        lineHeight: 24,
    },
    contactButton: {
        backgroundColor: '#6366f1',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        gap: 8,
    },
    contactButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    timingInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 16,
        gap: 12,
    },
    timingText: {
        flex: 1,
    },
    timingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    timingDetails: {
        fontSize: 14,
        color: '#cbd5e1',
    },
});