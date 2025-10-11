import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const COURSES = [
    'JEE Mains', 'EAPCET', 'C Language', 'Python', 'Java', 'SQL', 'DSA', 'Full Stack Web', 'JavaScript',
];

export default function CoursesScreen() {
    return (
        <ScrollView style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.cardGrid}>
                    {COURSES.map((course) => (
                        <View key={course} style={styles.card}>
                            <Text style={styles.cardText}>{course}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    outerContainer: { flex: 1, backgroundColor: '#121212' },
    container: { flex: 1, padding: 20, alignItems: 'center' },
    cardGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' },
    card: { backgroundColor: '#282828', borderRadius: 12, paddingVertical: 20, paddingHorizontal: 10, width: '48%', marginBottom: 15, alignItems: 'center', justifyContent: 'center', elevation: 5 },
    cardText: { color: '#E0E0E0', fontSize: 16, fontWeight: '500', textAlign: 'center' },
});
