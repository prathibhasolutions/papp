import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          About Prathibha Institute
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          We offer Comprehensive Training in Software Courses, JEE Mains, Eapcet and General Aptitude and Logical Reasoning. We are dedicated to maintaining the highest standards of academic excellence in all our programs.
        </ThemedText>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Courses We Offer
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">EAPCET:</ThemedText> Master key concepts, practice extensively, and achieve your dream engineering seat with our student-friendly EAPCET courses.
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">JEE Mains:</ThemedText> Dive into detailed explanations, expert strategies, and rigorous practice to excel in JEE Mains and secure admission to top engineering colleges.
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">C Language:</ThemedText> Learn programming basics, algorithms, and memory management for robust software development.
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">Python:</ThemedText> From web development to data science, unlock versatility for efficient and elegant coding solutions.
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">Java:</ThemedText> Build essential skills to create scalable applications and unlock opportunities in software development.
        </ThemedText>
        <ThemedText style={styles.courseParagraph}>
          <ThemedText type="defaultSemiBold">SQL:</ThemedText> Learn data manipulation, querying, and management to harness the power of structured information seamlessly.
        </ThemedText>

      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 20,
  },
  title: {
    fontFamily: Fonts.rounded,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: Fonts.rounded,
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  courseParagraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});
