import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Services() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1B4332', padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Our Services</Text>

            <Text style={{ color: '#fff', marginBottom: 20, lineHeight: 24, fontSize: 16, textAlign: 'center' }}>
                Complete gardening and landscaping solutions for your green spaces
            </Text>

            <View style={{ marginBottom: 20 }}>
                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🏡 Garden Design & Landscaping</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Professional garden design and complete landscaping services for residential and commercial spaces.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Site planning & design consultation</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Plant selection & placement</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Hardscape installation</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Water feature installation</Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌱 Plant Care & Maintenance</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Expert plant care services to keep your garden healthy and thriving year-round.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Regular watering & fertilization</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Pruning & trimming</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Pest & disease management</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Seasonal garden cleanup</Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌿 Indoor Plant Consultation</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Personalized consultation for selecting and caring for indoor plants in homes and offices.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Plant selection for your space</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Light & water requirement guidance</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Troubleshooting plant problems</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Repotting & propagation advice</Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🥕 Kitchen Garden Setup</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Complete setup and guidance for growing your own organic vegetables and herbs at home.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Space planning & layout design</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Soil preparation & composting</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Seed selection & planting schedule</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Organic farming techniques</Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌳 Tree Planting & Care</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Professional tree planting services and ongoing care for healthy tree growth.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Tree selection for your climate</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Proper planting techniques</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Tree trimming & shaping</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Disease prevention & treatment</Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 20 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🛠️ Garden Supplies & Tools</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 }}>
                        Quality gardening tools, organic fertilizers, and garden supplies for all your needs.
                    </Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Organic fertilizers & compost</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Quality potting soil & mixes</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Gardening tools & equipment</Text>
                    <Text style={{ color: '#B8E6C1', fontSize: 14 }}>• Pots, planters & garden décor</Text>
                </View>
            </View>

            <Text style={{ color: '#fff', marginBottom: 12, fontStyle: 'italic', textAlign: 'center', fontSize: 16 }}>
                "Let us help you create the garden of your dreams!"
            </Text>
        </ScrollView>
    );
}