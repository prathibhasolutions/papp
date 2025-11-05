import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarIndicatorStyle: {
          backgroundColor: '#6366f1',
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#1e293b',
          elevation: 4,
          shadowOpacity: 0.3,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 120,
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="about"
        options={{
          title: 'About',
        }}
      />
      <MaterialTopTabs.Screen
        name="courses"
        options={{
          title: 'Courses',
        }}
      />
    </MaterialTopTabs>
  );
}
