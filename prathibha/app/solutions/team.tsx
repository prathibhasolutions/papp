import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Shravan Kumar',
        role: 'Co-Founder & Lead Developer',
        description: 'Passionate about creating innovative solutions and leading technical development.',
        image: null, // Add image path when available
    },
    {
        id: 2,
        name: 'Aakruthi',
        role: 'Co-Founder & Business Development',
        description: 'Focused on business growth and client relationships.',
        image: null, // Add image path when available
    },
];

export default function TeamScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Our Team</Text>
            <Text style={styles.subtitle}>Meet the people behind Prathibha Solutions</Text>

            <View style={styles.teamGrid}>
                {TEAM_MEMBERS.map((member) => (
                    <View key={member.id} style={styles.memberCard}>
                        <View style={styles.imageContainer}>
                            {member.image ? (
                                <Image source={member.image} style={styles.memberImage} />
                            ) : (
                                <View style={styles.placeholderImage}>
                                    <Text style={styles.placeholderText}>
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </Text>
                                </View>
                            )}
                        </View>

                        <View style={styles.memberInfo}>
                            <Text style={styles.memberName}>{member.name}</Text>
                            <Text style={styles.memberRole}>{member.role}</Text>
                            <Text style={styles.memberDescription}>{member.description}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.joinUsSection}>
                <Text style={styles.joinUsTitle}>Want to Join Our Team?</Text>
                <Text style={styles.joinUsText}>
                    We're always looking for talented individuals who share our passion for technology and innovation.
                </Text>
                <Text style={styles.joinUsContact}>
                    Contact us to explore opportunities.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e293b',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 100, // Extra space for bottom tabs
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#94a3b8',
        textAlign: 'center',
        marginBottom: 30,
    },
    teamGrid: {
        gap: 20,
    },
    memberCard: {
        backgroundColor: '#334155',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 16,
    },
    memberImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    placeholderImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#00ffcc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#121212',
    },
    memberInfo: {
        alignItems: 'center',
    },
    memberName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memberRole: {
        fontSize: 16,
        color: '#00ffcc',
        marginBottom: 12,
        fontWeight: '600',
    },
    memberDescription: {
        fontSize: 14,
        color: '#cbd5e1',
        textAlign: 'center',
        lineHeight: 20,
    },
    joinUsSection: {
        marginTop: 40,
        padding: 20,
        backgroundColor: '#1e40af',
        borderRadius: 12,
        alignItems: 'center',
    },
    joinUsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    joinUsText: {
        fontSize: 14,
        color: '#e2e8f0',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 8,
    },
    joinUsContact: {
        fontSize: 14,
        color: '#00ffcc',
        fontWeight: '600',
    },
});