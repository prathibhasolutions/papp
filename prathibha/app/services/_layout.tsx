import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// --- Reusable Hamburger Icon Component ---
function HamburgerIcon() {
    return (
        <View style={iconStyles.container}>
            <View style={iconStyles.line} /><View style={iconStyles.line} /><View style={iconStyles.line} />
        </View>
    );
}
const iconStyles = StyleSheet.create({
    container: { width: 24, height: 18, justifyContent: 'space-between' },
    line: { height: 3, backgroundColor: '#fff', borderRadius: 2 },
});
// --- End of Icon Component ---

const Tab = createMaterialTopTabNavigator();
import HomeScreen from './home';
import AboutScreen from './about';
import ServicesScreen from './services';
import ProjectsScreen from './projects';
import ContactScreen from './contact';

// --- Menu items for Prathibha Services ---
const DRAWER_ITEMS = [
    { name: 'home', title: 'Home' },
    { name: 'about', title: 'About Us' },
    { name: 'services', title: 'Our Services' },
    { name: 'projects', title: 'Projects' },
    { name: 'contact', title: 'Contact Us' },
];

interface CustomDrawerProps { isVisible: boolean; onClose: () => void; navigation: any; }

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
                        <Text style={styles.drawerTitle}>Prathibha Services</Text>
                        {DRAWER_ITEMS.map(({ name, title }) => (
                            <TouchableOpacity key={name} style={styles.drawerItem} onPress={() => handlePress(name)} activeOpacity={0.8}>
                                <Text style={styles.drawerItemText}>{title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

export default function ServicesLayout() {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 15, marginRight: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/logos/prathibha_services_logo.png')}
                        style={{ width: 35, height: 35, borderRadius: 17.5 }}
                        resizeMode="contain"
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => setDrawerVisible(true)} style={{ marginRight: 15 }}>
                    <HamburgerIcon />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: '#1e293b' }}>
            <CustomDrawer isVisible={isDrawerVisible} onClose={() => setDrawerVisible(false)} navigation={navigation} />
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                    tabBarActiveTintColor: '#ff6b35',
                    tabBarInactiveTintColor: '#888',
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        marginBottom: 40
                    },
                    tabBarIndicatorStyle: { backgroundColor: '#ff6b35' },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarScrollEnabled: true,
                }}
                tabBarPosition="bottom"
            >
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="about"
                    component={AboutScreen}
                    options={{
                        title: 'About',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="services"
                    component={ServicesScreen}
                    options={{
                        title: 'Our Services',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'construct' : 'construct-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="projects"
                    component={ProjectsScreen}
                    options={{
                        title: 'Projects',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'folder' : 'folder-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="contact"
                    component={ContactScreen}
                    options={{
                        title: 'Contact',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'call' : 'call-outline'} size={20} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
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
