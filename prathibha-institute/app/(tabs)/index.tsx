import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const BUSINESSES = [
  { name: 'Prathibha Services', screen: '/services', logo: require('../../assets/logos/prathibha_services_logo.png') },
  { name: 'Prathibha Institute', screen: '/institute', logo: require('../../assets/logos/prathibha_institute_logo.png') },
  { name: 'Prathibha Solutions', screen: '/solutions', logo: require('../../assets/logos/prathibha_solutions_logo.png') },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Welcome to Prathibha</Text>
      <Text style={styles.subtitle}>Select a Business to Continue</Text>

      {BUSINESSES.map((business) => (
        <TouchableOpacity
          key={business.name}
          style={styles.button}
          onPress={() => router.push(business.screen as any)}
        >
          <View style={styles.buttonContent}>
            <Image source={business.logo} style={styles.logo} />
            <Text style={styles.buttonText}>{business.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1F41BB',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    // --- CHANGED ---
    width: 80,
    height: 80,
    borderRadius: 40, // half of width/height
    // --- END CHANGED ---
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    // --- ADDED ---
    // This allows the text to take up the rest of the space and wrap
    flex: 1,
    // --- END ADDED ---
  },
});
