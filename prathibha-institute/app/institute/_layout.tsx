import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Create the navigator and export it
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);


export default function InstituteLayout() {
    const insets = useSafeAreaInsets();

    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: '#00ffcc',
                tabBarInactiveTintColor: 'gray',
                tabBarIndicatorStyle: {
                    backgroundColor: '#00ffcc',
                },
                tabBarStyle: {
                    backgroundColor: '#121212',
                    // Add padding top to avoid the status bar
                    paddingTop: insets.top,
                },
            }}
        >
            <MaterialTopTabs.Screen
                name="about"
                options={{
                    title: 'About',
                }}
            />
            <MaterialTopTabs.Screen
                name="courses"
                options={{
                    title: 'Courses',
                }}
            />
        </MaterialTopTabs>
    );
}
