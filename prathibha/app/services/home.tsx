import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Text style={styles.heading}>Building Better Homes,{"\n"} Service by Service</Text>
                    <Text style={styles.lead}>
                        Your one-stop solution for home services! From carpentry to appliance repairs, we offer quality work. Book online or call for expert services in carpentry, painting, electrical, plumbing, and more.
                    </Text>

                    <Text style={styles.location}>Nizamabad, Telangana</Text>

                    <TouchableOpacity style={styles.bookBtn} disabled={true} activeOpacity={0.8}>
                        <Text style={styles.bookBtnText}>Book a Service</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <Image source={require('../../assets/images/services/index.jpg')} style={styles.hero} resizeMode="cover" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    row: { flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between' },
    left: { flex: 1, paddingRight: 12 },
    right: { width: 220 },
    heading: { color: '#fff', fontSize: 28, fontWeight: '700', marginBottom: 12 },
    lead: { color: '#ddd', fontSize: 16, marginBottom: 12 },
    location: { color: '#ddd', marginBottom: 18, fontWeight: '600' },
    hero: { width: 220, height: 220, borderRadius: 8 },
    bookBtn: { backgroundColor: '#0d6efd', paddingVertical: 10, paddingHorizontal: 18, borderRadius: 6, opacity: 0.75 },
    bookBtnText: { color: '#fff', fontWeight: '700' },
});
