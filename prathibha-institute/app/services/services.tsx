import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import PlumbingCard from './cards/plumbing';
import LogisticsCard from './cards/logistics';
import CarpentryCard from './cards/carpentry';
import PaintingCard from './cards/painting';
import TilesCard from './cards/tiles';
import ElectricalCard from './cards/electrical';
import GeyserCard from './cards/geyser';
import WashingMachineCard from './cards/washingmachine';
import WaterPurifierCard from './cards/waterpurifier';
import RefrigeratorCard from './cards/refrigerator';

export default function Services() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
            <TouchableOpacity onPress={() => router.push('/services/cards/plumbing')}>
                <PlumbingCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/logistics')}>
                <LogisticsCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/carpentry')}>
                <CarpentryCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/painting')}>
                <PaintingCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/tiles')}>
                <TilesCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/electrical')}>
                <ElectricalCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/geyser')}>
                <GeyserCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/washingmachine')}>
                <WashingMachineCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/waterpurifier')}>
                <WaterPurifierCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/services/cards/refrigerator')}>
                <RefrigeratorCard />
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
});
