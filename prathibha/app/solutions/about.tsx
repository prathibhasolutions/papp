import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>About Prathibha Solutions</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Story</Text>
                <Text style={styles.description}>
                    We started Prathibha Solutions in October 2023 as a small startup with big dreams. Our co-founders, Shravan Kumar and Aakruthi, began by creating websites for local businesses. We saw how much a good website could help businesses get more customers.
                </Text>
                <Text style={styles.description}>
                    After building websites and seeing great results for our clients, we expanded into mobile apps, graphic design, and digital marketing. Each new service came from listening to what our customers actually needed to grow their business.
                </Text>
                <Text style={styles.description}>
                    What makes us different? We keep things simple. Instead of using complicated tech words, we talk to you like normal people. We understand that most business owners just want technology that helps them get more customers and grow their business.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>What We Believe In</Text>
                <View style={styles.beliefsList}>
                    <View style={styles.beliefItem}>
                        <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                        <Text style={styles.beliefText}>Keep It Simple: We explain everything in plain English and build solutions that are easy to use.</Text>
                    </View>
                    <View style={styles.beliefItem}>
                        <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                        <Text style={styles.beliefText}>Real Results: We focus on what actually helps your business grow, not just fancy features.</Text>
                    </View>
                    <View style={styles.beliefItem}>
                        <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                        <Text style={styles.beliefText}>Always Learning: Technology changes fast, so we keep learning new things to help you better.</Text>
                    </View>
                    <View style={styles.beliefItem}>
                        <Ionicons name="checkmark-circle" size={20} color="#00ffcc" />
                        <Text style={styles.beliefText}>Fair Pricing: Good technology shouldn't cost a fortune. We offer honest, affordable prices.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Core Services</Text>
                <View style={styles.servicesList}>
                    <View style={styles.serviceItem}>
                        <Ionicons name="desktop-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Website Development - Starting from ₹2,000</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="globe-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Web App Development - Complete backend solutions</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="phone-portrait-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Mobile App Development - Android & iPhone apps from ₹10,000</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="color-palette-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>UI/UX Design - Beautiful and easy-to-use interfaces</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="server-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Domains & Hosting - 24/7 support and reliable hosting</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="trending-up-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Digital Marketing - SEO, Google ads, social media marketing</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <Ionicons name="image-outline" size={24} color="#00ffcc" />
                        <Text style={styles.serviceText}>Graphic Design - Business cards, brochures, video editing</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Choose Us?</Text>
                <Text style={styles.description}>
                    Since starting in October 2023, we've helped many businesses create their online presence. We're not the biggest company, but we care about every single project. When you work with us, you're not just another client - you're part of our growing family.
                </Text>

                <View style={styles.whyChooseList}>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="cash-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>Affordable prices that won't break your budget</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="ear-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>We actually listen to what you need</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="flash-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>Quick response when you have questions</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="chatbubble-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>We speak normal English, not tech jargon</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="people-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>Your project gets personal attention from our founders</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="school-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>We know the latest technologies and trends</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="shield-checkmark-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>Support even after your project is done</Text>
                    </View>
                    <View style={styles.whyChooseItem}>
                        <Ionicons name="bulb-outline" size={20} color="#00ffcc" />
                        <Text style={styles.whyChooseText}>Honest advice about what will work for your business</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ctaSection}>
                <Text style={styles.ctaText}>
                    "Ready to grow your business online? Let's talk about how we can help."
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
        paddingBottom: 100,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00ffcc',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
        marginBottom: 16,
    },
    beliefsList: {
        gap: 12,
    },
    beliefItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    beliefText: {
        fontSize: 15,
        color: '#fff',
        flex: 1,
        lineHeight: 22,
    },
    servicesList: {
        gap: 12,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#334155',
        padding: 12,
        borderRadius: 8,
    },
    serviceText: {
        fontSize: 15,
        color: '#fff',
        flex: 1,
    },
    whyChooseList: {
        gap: 12,
        marginTop: 16,
    },
    whyChooseItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    whyChooseText: {
        fontSize: 15,
        color: '#fff',
        flex: 1,
        lineHeight: 22,
    },
    ctaSection: {
        backgroundColor: '#1e40af',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
    },
    ctaText: {
        fontSize: 18,
        color: '#fff',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: 26,
    },
});