import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image } from 'react-native';
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

// --- Menu items for Prathibha Nursery ---
const DRAWER_ITEMS = [
    { name: 'home', title: 'Home', disabled: false },
    { name: 'company-info', title: 'About', disabled: false },
    { name: 'plants', title: 'Plants & Seeds', disabled: false },
    { name: 'services', title: 'Services', disabled: false },
    { name: 'gallery', title: 'Gallery', disabled: true },
    { name: 'contact', title: 'Contact Us', disabled: true },
];

interface CustomDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    onAboutPress: () => void;
}

function CustomDrawer({ isVisible, onClose, onAboutPress }: CustomDrawerProps) {
    if (!isVisible) return null;

    const handlePress = (screenName: string, disabled: boolean) => {
        if (!disabled) {
            console.log('Navigating to:', screenName);
            if (screenName === 'company-info') {
                onAboutPress();
            }
            onClose();
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
                <View style={styles.drawerContainer}>
                    <ScrollView>
                        <Text style={styles.drawerTitle}>Prathibha Nursery</Text>
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

// About Modal Component
function AboutModal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    if (!isVisible) return null;

    return (
        <Modal animationType="slide" transparent={false} visible={isVisible} onRequestClose={onClose}>
            <View style={{ flex: 1, backgroundColor: '#1B4332' }}>
                <View style={{ padding: 20, paddingTop: 50 }}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={{ alignSelf: 'flex-end', marginBottom: 20, backgroundColor: '#52B788', padding: 10, borderRadius: 5 }}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Close ✕</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>About Prathibha Nursery</Text>

                        <Text style={{ color: '#95D5B2', fontWeight: 'bold', marginTop: 16, marginBottom: 6 }}>Our Mission</Text>
                        <Text style={{ color: '#fff', marginBottom: 12, lineHeight: 22, fontSize: 16 }}>
                            Prathibha Nursery is dedicated to bringing nature closer to your home and community. We specialize in providing high-quality plants, seeds, and gardening services to help you create beautiful green spaces.
                        </Text>

                        <Text style={{ color: '#95D5B2', fontWeight: 'bold', marginTop: 16, marginBottom: 6 }}>What We Offer</Text>
                        <Text style={{ color: '#fff', marginBottom: 4, fontSize: 15 }}>• Indoor & Outdoor Plants</Text>
                        <Text style={{ color: '#fff', marginBottom: 4, fontSize: 15 }}>• Flower & Vegetable Seeds</Text>
                        <Text style={{ color: '#fff', marginBottom: 4, fontSize: 15 }}>• Garden Design & Landscaping</Text>
                        <Text style={{ color: '#fff', marginBottom: 4, fontSize: 15 }}>• Plant Care Consultation</Text>
                        <Text style={{ color: '#fff', marginBottom: 4, fontSize: 15 }}>• Organic Fertilizers & Soil</Text>
                        <Text style={{ color: '#fff', marginBottom: 12, fontSize: 15 }}>• Garden Maintenance Services</Text>

                        <Text style={{ color: '#fff', marginBottom: 20, fontStyle: 'italic', textAlign: 'center', fontSize: 16 }}>
                            "Growing green dreams, one plant at a time."
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

export default function NurseryLayout() {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isAboutVisible, setAboutVisible] = useState(false);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 15, marginRight: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 35, height: 35, borderRadius: 17.5, overflow: 'hidden' }}>
                        <Image
                            source={require('../../assets/logos/PrathibhaNursery.png')}
                            style={{ width: 50, height: 50, marginTop: -7.5, marginLeft: -7.5 }}
                            resizeMode="cover"
                        />
                    </View>
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
            <CustomDrawer
                isVisible={isDrawerVisible}
                onClose={() => setDrawerVisible(false)}
                onAboutPress={() => setAboutVisible(true)}
            />
            <AboutModal
                isVisible={isAboutVisible}
                onClose={() => setAboutVisible(false)}
            />
            <MaterialTopTabs
                screenOptions={{
                    tabBarActiveTintColor: '#52B788',
                    tabBarInactiveTintColor: '#888',
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        marginBottom: 40
                    },
                    tabBarIndicatorStyle: { backgroundColor: '#52B788' },
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
                    name="plants"
                    options={{
                        title: 'Plants & Seeds',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'leaf' : 'leaf-outline'} size={20} color={color} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="services"
                    options={{
                        title: 'Services',
                        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                            <Ionicons name={focused ? 'hammer' : 'hammer-outline'} size={20} color={color} />
                        ),
                    }}
                />
            </MaterialTopTabs>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
    drawerContainer: { width: '80%', height: '100%', backgroundColor: '#1B4332', paddingTop: 60, paddingHorizontal: 20 },
    drawerTitle: { fontSize: 24, fontWeight: 'bold', color: '#52B788', marginBottom: 30 },
    drawerItem: { paddingVertical: 15 },
    drawerItemText: { fontSize: 18, color: '#ffffff' },
    disabledItem: { opacity: 0.5 },
    disabledText: { color: 'gray' },
});