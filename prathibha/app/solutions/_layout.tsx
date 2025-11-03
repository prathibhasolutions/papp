import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// --- Reusable Hamburger Icon Component ---
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
    container: { width: 24, height: 18, justifyContent: 'space-between' },
    line: { height: 3, backgroundColor: '#fff', borderRadius: 2 },
});

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

// --- Menu items for Prathibha Solutions ---
const DRAWER_ITEMS = [
    { name: 'home', title: 'Home', disabled: false },
    { name: 'company-info', title: 'About', disabled: false },
    { name: 'services', title: 'Services', disabled: false },
    { name: 'portfolio', title: 'Portfolio', disabled: true },
    { name: 'contact', title: 'Contact Us', disabled: true },
];

interface CustomDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    navigation: any;
}

function CustomDrawer({ isVisible, onClose, navigation }: CustomDrawerProps) {
    if (!isVisible) return null;

    const handlePress = (screenName: string, disabled: boolean) => {
        if (!disabled) {
            console.log('Navigating to:', screenName);
            if (screenName === 'company-info') {
                navigation.navigate('about');
            } else {
                navigation.navigate(screenName);
            }
            onClose();
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
                <View style={styles.drawerContainer}>
                    <ScrollView>
                        <Text style={styles.drawerTitle}>Prathibha Solutions</Text>
                        {DRAWER_ITEMS.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[styles.drawerItem, item.disabled && styles.disabledItem]}
                                onPress={() => handlePress(item.name, item.disabled)}
                                activeOpacity={item.disabled ? 1 : 0.2}
                            >
                                <Text style={[styles.drawerItemText, item.disabled && styles.disabledText]}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}



export default function SolutionsLayout() {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => setDrawerVisible(true)} style={{ marginLeft: 15, marginRight: 15 }}>
                    <HamburgerIcon />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: '#1e293b' }}>
            <CustomDrawer
                isVisible={isDrawerVisible}
                onClose={() => setDrawerVisible(false)}
                navigation={navigation}
            />
            <MaterialTopTabs
                screenOptions={{
                    tabBarActiveTintColor: '#00ffcc',
                    tabBarInactiveTintColor: '#888',
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        marginBottom: 40
                    },
                    tabBarIndicatorStyle: { backgroundColor: '#00ffcc' },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarScrollEnabled: true,
                }}
                tabBarPosition="bottom"
            >
                <MaterialTopTabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="services"
                    options={{
                        title: 'Services',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="team"
                    options={{
                        title: 'Our Team',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'people' : 'people-outline'} size={20} color={color} />
                        ),
                    }}
                />
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
