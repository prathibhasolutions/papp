import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const BUSINESSES = [
  { name: 'Prathibha Services', screen: '/services', logo: require('../../assets/logos/prathibha_services_logo.png'), bgColor: '#ADD8E6' }, // light blue
  { name: 'Prathibha Institute', screen: '/institute', logo: require('../../assets/logos/prathibha_institute_logo.png'), bgColor: '#7E8CAD' },
  { name: 'Prathibha Solutions', screen: '/solutions', logo: require('../../assets/logos/prathibha_solutions_logo.png'), bgColor: '#90EE90' }, // light green
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Welcome to Prathibha</Text>
      <Text style={styles.subtitle}>Select a Business to Continue</Text>

      <View style={styles.grid}>
        {BUSINESSES.map((business) => (
          <TouchableOpacity
            key={business.name}
            style={[styles.squareCard, { backgroundColor: business.bgColor }]}
            onPress={() => router.push(business.screen as any)}
            activeOpacity={0.85}
          >
            <View style={styles.logoCircle}>
              <Image source={business.logo} style={styles.squareLogo} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#00ffcc',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 18,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  squareCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 6,
  },
  logoCircle: {
    width: '70%',
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  squareLogo: {
    width: '95%',
    height: '95%',
    transform: [{ scale: 1.06 }],
  },
});
