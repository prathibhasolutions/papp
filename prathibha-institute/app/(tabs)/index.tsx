import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const BUSINESSES = [
  { name: 'Prathibha Services', screen: '/services' },
  { name: 'Prathibha Institute', screen: '/institute' },
  { name: 'Prathibha Solutions', screen: '/solutions' },
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
          onPress={() => router.push(business.screen)}
        >
          <Text style={styles.buttonText}>{business.name}</Text>
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
    paddingHorizontal: 20,
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
    paddingVertical: 20,
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
