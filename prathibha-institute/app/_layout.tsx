import { Stack } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      {/* This screen is the main home screen with the three business buttons */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* --- Institute Screen with Logo --- */}
      <Stack.Screen
        name="institute"
        options={{
          title: 'Prathibha Institute',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerRight: () => (
            <Image
              source={require('../assets/logos/prathibha_institute_logo.png')}
              style={{ width: 35, height: 35, borderRadius: 17.5, marginRight: 15 }}
            />
          ),
        }}
      />

      {/* --- Services Screen with Logo --- */}
      <Stack.Screen
        name="services"
        options={{
          title: 'Prathibha Services',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerRight: () => (
            <Image
              source={require('../assets/logos/prathibha_services_logo.png')}
              style={{ width: 35, height: 35, borderRadius: 17.5, marginRight: 15 }}
            />
          ),
        }}
      />

      {/* --- Solutions Screen with Logo --- */}
      <Stack.Screen
        name="solutions"
        options={{
          title: 'Prathibha Solutions',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerRight: () => (
            <Image
              source={require('../assets/logos/prathibha_solutions_logo.png')}
              style={{ width: 35, height: 35, borderRadius: 17.5, marginRight: 15 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
