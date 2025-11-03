import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

const DRAWER_ITEMS = [
    { name: 'about', title: 'About' },
    { name: 'courses', title: 'Courses' },
    { name: 'faculty', title: 'Faculty' },
    { name: 'admissions', title: 'Admissions' },
    { name: 'facilities', title: 'Facilities' },
    { name: 'contact', title: 'Contact Us' },
];

// --- 1. The new HamburgerIcon component ---
// This simple component uses three <View> elements to draw the lines.
function HamburgerIcon() {
    return (
        <View style={iconStyles.container}>
            <View style={iconStyles.line} />
            <View style={iconStyles.line} />
            <View style={iconStyles.line} />
        </View>
    );
}

const iconStyles = StyleSheet.create({
    container: {
        width: 24,
        height: 18, // Adjusted height for better proportions
        justifyContent: 'space-between',
    },
    line: {
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
});

interface CustomDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    navigation: any;
}

function CustomDrawer({ isVisible, onClose, navigation }: CustomDrawerProps) {
    if (!isVisible) return null;

    const handlePress = (screenName: string, disabled?: boolean) => {
        if (!disabled) {
            navigation.navigate(screenName);
            onClose();
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
                <View style={styles.drawerContainer}>
                    <ScrollView>
                        <Text style={styles.drawerTitle}>Prathibha</Text>
                        {DRAWER_ITEMS.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={styles.drawerItem}
                                onPress={() => handlePress(item.name, false)}
                                activeOpacity={0.2}
                            >
                                <Text style={styles.drawerItemText}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

export default function InstituteLayout() {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => setDrawerVisible(true)} style={{ marginLeft: 15, marginRight: 15 }}>
                    {/* --- 2. Replaced the Text with the HamburgerIcon component --- */}
                    <HamburgerIcon />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: '#1e293b' }}>
            <CustomDrawer isVisible={isDrawerVisible} onClose={() => setDrawerVisible(false)} navigation={navigation} />
            <MaterialTopTabs
                screenOptions={{
                    tabBarActiveTintColor: '#6366f1',
                    tabBarInactiveTintColor: '#888',
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        marginBottom: 40
                    },
                    tabBarIndicatorStyle: { backgroundColor: '#6366f1' },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarScrollEnabled: true,
                }}
                tabBarPosition="bottom"
            >
                <MaterialTopTabs.Screen
                    name="about"
                    options={{
                        title: 'About',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="courses"
                    options={{
                        title: 'Courses',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'book' : 'book-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="faculty"
                    options={{
                        title: 'Faculty',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'people' : 'people-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="admissions"
                    options={{
                        title: 'Admissions',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'school' : 'school-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="facilities"
                    options={{
                        title: 'Facilities',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'business' : 'business-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="contact"
                    options={{
                        title: 'Contact',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'call' : 'call-outline'} size={20} color={color} />
                        ),
                    }}
                />
            </MaterialTopTabs>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
    drawerContainer: { width: '80%', height: '100%', backgroundColor: '#121212', paddingTop: 60, paddingHorizontal: 20 },
    drawerTitle: { fontSize: 24, fontWeight: 'bold', color: '#00ffcc', marginBottom: 30 },
    drawerItem: { paddingVertical: 15 },
    drawerItemText: { fontSize: 18, color: '#ffffff' },
    disabledItem: { opacity: 0.5 },
    disabledText: { color: 'gray' },
});
