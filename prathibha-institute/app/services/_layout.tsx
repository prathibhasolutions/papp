import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';

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

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

// --- Menu items for Prathibha Services ---
const DRAWER_ITEMS = [
    { name: 'about', title: 'About' },
    { name: 'services', title: 'Our Services' }, // Changed from 'courses'
    { name: 'team', title: 'Our Team', disabled: true },
    { name: 'contact', title: 'Contact Us', disabled: true },
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
                        {DRAWER_ITEMS.map(({ name, title, disabled }) => (
                            <TouchableOpacity key={name} style={[styles.drawerItem, disabled && styles.disabledItem]} onPress={() => handlePress(name, disabled)} activeOpacity={disabled ? 1 : 0.2}>
                                <Text style={[styles.drawerItemText, disabled && styles.disabledText]}>{title}</Text>
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
                <TouchableOpacity onPress={() => setDrawerVisible(true)} style={{ marginLeft: 15, marginRight: 15 }}>
                    <HamburgerIcon />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <CustomDrawer isVisible={isDrawerVisible} onClose={() => setDrawerVisible(false)} navigation={navigation} />
            <MaterialTopTabs>
                {DRAWER_ITEMS.filter(item => !item.disabled).map(item => (
                    <MaterialTopTabs.Screen key={item.name} name={item.name} options={{ title: item.title }} />
                ))}
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
