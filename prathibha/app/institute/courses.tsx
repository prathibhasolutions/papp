import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface CourseContent {
    overview: string;
    curriculum: string[];
    features: string[];
    outcomes: string[];
}

interface Course {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: [string, string];
    category: string;
    duration: string;
    level: string;
    fullContent: CourseContent;
}

const COURSES_DATA: Course[] = [
    // Intermediate Education
    {
        id: 1,
        title: 'EAPCET',
        description: 'Engineering Agriculture and Pharmacy Common Entrance Test preparation',
        icon: 'school',
        color: ['#3b82f6', '#1d4ed8'],
        category: 'Intermediate Education',
        duration: '6 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 2,
        title: 'JEE Mains',
        description: 'Joint Entrance Examination for engineering colleges',
        icon: 'trophy',
        color: ['#10b981', '#059669'],
        category: 'Intermediate Education',
        duration: '8 Months',
        level: 'Advanced',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 3,
        title: 'POLYCET',
        description: 'Polytechnic Common Entrance Test preparation',
        icon: 'construct',
        color: ['#dc2626', '#b91c1c'],
        category: 'Intermediate Education',
        duration: '4 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },

    // Software Courses
    {
        id: 4,
        title: 'C Language',
        description: 'Learn programming fundamentals with C language',
        icon: 'code-slash',
        color: ['#f59e0b', '#f97316'],
        category: 'Software',
        duration: '2 Months',
        level: 'Beginner',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 5,
        title: 'Python',
        description: 'Dynamic programming language for web and data science',
        icon: 'logo-python',
        color: ['#8b5cf6', '#7c3aed'],
        category: 'Software',
        duration: '3 Months',
        level: 'Beginner',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 6,
        title: 'Java',
        description: 'Object-oriented programming with enterprise applications',
        icon: 'cafe',
        color: ['#f59e0b', '#d97706'],
        category: 'Software',
        duration: '4 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 7,
        title: 'HTML',
        description: 'Structure and content of web pages',
        icon: 'document-text',
        color: ['#7c3aed', '#6d28d9'],
        category: 'Software',
        duration: '1 Month',
        level: 'Beginner',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 8,
        title: 'CSS',
        description: 'Styling and design for beautiful web interfaces',
        icon: 'color-palette',
        color: ['#059669', '#047857'],
        category: 'Software',
        duration: '2 Months',
        level: 'Beginner',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 9,
        title: 'JavaScript',
        description: 'Interactive web development and modern applications',
        icon: 'logo-javascript',
        color: ['#16a34a', '#15803d'],
        category: 'Software',
        duration: '3 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 10,
        title: 'Data Structures and Algorithms',
        description: 'Essential problem-solving and coding interview preparation',
        icon: 'git-network',
        color: ['#f97316', '#ea580c'],
        category: 'Software',
        duration: '4 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 11,
        title: 'SQL',
        description: 'Database management and data manipulation',
        icon: 'server',
        color: ['#6366f1', '#4f46e5'],
        category: 'Software',
        duration: '2 Months',
        level: 'Beginner',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 12,
        title: 'Selenium',
        description: 'Automated testing and quality assurance',
        icon: 'bug',
        color: ['#ec4899', '#db2777'],
        category: 'Software',
        duration: '2 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 13,
        title: 'AWS',
        description: 'Cloud computing and modern infrastructure',
        icon: 'cloud',
        color: ['#8b5cf6', '#7c3aed'],
        category: 'Software',
        duration: '3 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 14,
        title: 'Full Stack Development',
        description: 'Complete web development with Python and Django',
        icon: 'layers',
        color: ['#3b82f6', '#1d4ed8'],
        category: 'Software',
        duration: '6 Months',
        level: 'Advanced',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },

    // Aptitude Courses
    {
        id: 15,
        title: 'Quantitative Aptitude',
        description: 'Mathematical problem-solving for competitive exams',
        icon: 'calculator',
        color: ['#10b981', '#059669'],
        category: 'Aptitude',
        duration: '3 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
    {
        id: 16,
        title: 'Logical Reasoning',
        description: 'Critical thinking and analytical problem-solving',
        icon: 'bulb',
        color: ['#dc2626', '#b91c1c'],
        category: 'Aptitude',
        duration: '3 Months',
        level: 'Intermediate',
        fullContent: { overview: '', curriculum: [], features: [], outcomes: [] }
    },
]; export default function Courses() {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Courses');

    const openCourseModal = (course: Course) => {
        setSelectedCourse(course);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCourse(null);
    };

    const getFilteredCourses = () => {
        if (selectedCategory === 'All Courses') {
            return COURSES_DATA;
        }
        return COURSES_DATA.filter(course => course.category === selectedCategory);
    };

    const renderCourseCard = (course: Course) => (
        <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => openCourseModal(course)}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={course.color}
                style={styles.cardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={course.icon as any} size={28} color="#ffffff" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.categoryText}>{course.category}</Text>
                        <View style={styles.courseDetails}>
                            <Text style={styles.durationText}>{course.duration}</Text>
                            <Text style={styles.levelText}>{course.level}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContent}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <Text style={styles.courseDescription}>{course.description}</Text>
                </View>

                <View style={styles.cardFooter}>
                    <Text style={styles.readMoreText}>Tap to learn more</Text>
                    <Ionicons name="arrow-forward" size={16} color="rgba(255,255,255,0.8)" />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#0f0f23', '#1a1a3e', '#2d1b69']}
                style={styles.backgroundGradient}
            />

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#6366f1', '#8b5cf6']}
                        style={styles.headerGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Ionicons name="library" size={40} color="#ffffff" />
                        <Text style={styles.headerTitle}>Our Courses</Text>
                        <Text style={styles.headerSubtitle}>Excellence in Education</Text>
                    </LinearGradient>
                </View>

                {/* Filter Dropdown */}
                <View style={styles.filterContainer}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                        style={styles.filterGradient}
                    >
                        <View style={styles.filterHeader}>
                            <Ionicons name="filter" size={20} color="#ffffff" />
                            <Text style={styles.filterLabel}>Filter by Category</Text>
                        </View>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedCategory}
                                style={styles.picker}
                                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                                dropdownIconColor="#ffffff"
                            >
                                <Picker.Item label="All Courses" value="All Courses" color="#ffffff" />
                                <Picker.Item label="Intermediate Education" value="Intermediate Education" color="#ffffff" />
                                <Picker.Item label="Software" value="Software" color="#ffffff" />
                                <Picker.Item label="Aptitude" value="Aptitude" color="#ffffff" />
                            </Picker>
                        </View>
                    </LinearGradient>
                </View>

                {/* Courses Grid */}
                <View style={styles.coursesContainer}>
                    {getFilteredCourses().map(renderCourseCard)}
                </View>
            </ScrollView>

            {/* Course Detail Modal */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                {selectedCourse && (
                    <View style={styles.modalContainer}>
                        <LinearGradient
                            colors={['#0f0f23', '#1a1a3e', '#2d1b69']}
                            style={styles.modalBackground}
                        >
                            <ScrollView
                                style={styles.modalScrollView}
                                contentContainerStyle={styles.modalContent}
                            >
                                {/* Modal Header */}
                                <LinearGradient
                                    colors={selectedCourse.color}
                                    style={styles.modalHeader}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={closeModal}
                                    >
                                        <Ionicons name="close" size={24} color="#ffffff" />
                                    </TouchableOpacity>

                                    <View style={styles.modalHeaderContent}>
                                        <Ionicons name={selectedCourse.icon as any} size={48} color="#ffffff" />
                                        <Text style={styles.modalTitle}>{selectedCourse.title}</Text>
                                        <Text style={styles.modalCategory}>{selectedCourse.category}</Text>
                                    </View>
                                </LinearGradient>

                                {/* Course Details */}
                                <View style={styles.modalDetailsContainer}>
                                    <View style={styles.quickInfo}>
                                        <View style={styles.infoItem}>
                                            <Ionicons name="time" size={20} color="#6366f1" />
                                            <Text style={styles.infoText}>{selectedCourse.duration}</Text>
                                        </View>
                                        <View style={styles.infoItem}>
                                            <Ionicons name="trending-up" size={20} color="#6366f1" />
                                            <Text style={styles.infoText}>{selectedCourse.level}</Text>
                                        </View>
                                    </View>

                                    {/* Overview */}
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Overview</Text>
                                        <View style={styles.sectionCard}>
                                            <Text style={styles.sectionText}>{selectedCourse.fullContent.overview}</Text>
                                        </View>
                                    </View>

                                    {/* Curriculum */}
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Curriculum</Text>
                                        <View style={styles.sectionCard}>
                                            {selectedCourse.fullContent.curriculum.map((item: string, index: number) => (
                                                <View key={index} style={styles.listItem}>
                                                    <Ionicons name="checkmark-circle" size={16} color="#10b981" />
                                                    <Text style={styles.listText}>{item}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>

                                    {/* Features */}
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Key Features</Text>
                                        <View style={styles.sectionCard}>
                                            {selectedCourse.fullContent.features.map((feature: string, index: number) => (
                                                <View key={index} style={styles.listItem}>
                                                    <Ionicons name="star" size={16} color="#f59e0b" />
                                                    <Text style={styles.listText}>{feature}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>

                                    {/* Learning Outcomes */}
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTitle}>Learning Outcomes</Text>
                                        <View style={styles.sectionCard}>
                                            {selectedCourse.fullContent.outcomes.map((outcome: string, index: number) => (
                                                <View key={index} style={styles.listItem}>
                                                    <Ionicons name="trophy" size={16} color="#8b5cf6" />
                                                    <Text style={styles.listText}>{outcome}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>

                                    {/* Enroll Button */}
                                    <LinearGradient
                                        colors={selectedCourse.color}
                                        style={styles.enrollButton}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <TouchableOpacity style={styles.enrollButtonTouch}>
                                            <Text style={styles.enrollButtonText}>Enroll Now</Text>
                                            <Ionicons name="arrow-forward" size={20} color="#ffffff" />
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                    </View>
                )}
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f23',
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 100,
    },
    header: {
        margin: 20,
        marginTop: 10,
    },
    headerGradient: {
        borderRadius: 20,
        padding: 32,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 12,
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
    },
    coursesContainer: {
        paddingHorizontal: 20,
    },
    filterContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    filterGradient: {
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    filterHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    filterLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginLeft: 8,
    },
    pickerContainer: {
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
    },
    picker: {
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    courseCard: {
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 16,
        width: width - 40, // Full width for single column
    },
    cardGradient: {
        padding: 16,
        minHeight: 120,
        justifyContent: 'center',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    cardInfo: {
        flex: 1,
    },
    categoryText: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    courseDetails: {
        flexDirection: 'row',
        marginTop: 2,
    },
    durationText: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        marginRight: 12,
    },
    levelText: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
    },
    cardContent: {
        flex: 1,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    courseDescription: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 8,
    },
    readMoreText: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.6)',
        fontStyle: 'italic',
        marginRight: 4,
    },
    // Modal Styles
    modalContainer: {
        flex: 1,
    },
    modalBackground: {
        flex: 1,
    },
    modalScrollView: {
        flex: 1,
    },
    modalContent: {
        paddingBottom: 40,
    },
    modalHeader: {
        padding: 24,
        paddingTop: 60,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalHeaderContent: {
        alignItems: 'center',
        marginTop: 20,
    },
    modalTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 16,
        marginBottom: 4,
        textAlign: 'center',
    },
    modalCategory: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    modalDetailsContainer: {
        padding: 20,
    },
    quickInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 8,
        fontWeight: '600',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 12,
    },
    sectionCard: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    sectionText: {
        fontSize: 15,
        color: '#e2e8f0',
        lineHeight: 22,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    listText: {
        fontSize: 15,
        color: '#e2e8f0',
        marginLeft: 12,
        flex: 1,
        lineHeight: 22,
    },
    enrollButton: {
        borderRadius: 16,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    enrollButtonTouch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
    },
    enrollButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginRight: 8,
    },
});
