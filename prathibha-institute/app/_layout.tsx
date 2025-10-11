import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="institute" // This now refers to the directory
        options={{
          title: 'Prathibha Institute',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false, // Cleaner look on iOS
        }}
      />
      <Stack.Screen
        name="services"
        options={{
          title: 'Prathibha Services',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="solutions"
        options={{
          title: 'Prathibha Solutions',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
