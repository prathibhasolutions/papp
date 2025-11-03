import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Plants() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1B4332', padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Plants & Seeds Collection</Text>

            <Text style={{ color: '#95D5B2', fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Indoor Plants</Text>
            <View style={{ marginBottom: 20 }}>
                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌿 Foliage Plants</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Monstera, Pothos, Snake Plants, ZZ Plants, Peace Lily, Rubber Plants
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌺 Flowering Plants</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Orchids, African Violets, Begonias, Anthuriums, Cyclamen
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌵 Succulents & Cacti</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Aloe Vera, Jade Plants, Echeveria, Barrel Cactus, Prickly Pear
                    </Text>
                </View>
            </View>

            <Text style={{ color: '#95D5B2', fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Outdoor Plants</Text>
            <View style={{ marginBottom: 20 }}>
                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌳 Trees & Shrubs</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Mango, Coconut, Banyan, Neem, Hibiscus, Bougainvillea, Jasmine
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🥕 Vegetable Plants</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Tomato, Chili, Brinjal, Okra, Spinach, Coriander, Mint
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌺 Flower Plants</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Rose, Marigold, Sunflower, Dahlia, Chrysanthemum, Petunia
                    </Text>
                </View>
            </View>

            <Text style={{ color: '#95D5B2', fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Seeds Collection</Text>
            <View style={{ marginBottom: 20 }}>
                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌾 Vegetable Seeds</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Organic and hybrid varieties of all seasonal vegetables
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 12 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌸 Flower Seeds</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Annual and perennial flower seeds for beautiful gardens
                    </Text>
                </View>

                <View style={{ backgroundColor: '#2D5A3D', padding: 16, borderRadius: 8, marginBottom: 20 }}>
                    <Text style={{ color: '#95D5B2', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🌿 Herb Seeds</Text>
                    <Text style={{ color: '#fff', fontSize: 16, lineHeight: 22 }}>
                        Basil, Cilantro, Parsley, Oregano, Thyme, and more
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}