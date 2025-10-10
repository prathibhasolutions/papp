import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

// Course data based on your explore.tsx and website
const COURSES = [
  'JEE Mains',
  'EAPCET',
  'C Language',
  'Python',
  'Java',
  'SQL',
  'DSA',
  'Full Stack Web',

];

export default function Index() {
  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Welcome to Prathibha Institute 🎓</Text>
        <Text style={styles.subtitle}>Courses We Offer</Text>

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
  outerContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#00ffcc',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    backgroundColor: '#282828',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '48%', // Creates a two-column layout
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // Adding a subtle shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
