import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.paragraph}>
                We offer Comprehensive Training in Software Courses, JEE Mains, Eapcet and General Aptitude and Logical Reasoning. We are dedicated to maintaining the highest standards of academic excellence in all our programs.
            </Text>
            {/* You can add more content here */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#E0E0E0',
    },
});
