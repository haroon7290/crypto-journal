import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import AddTradeScreen from './screens/AddTradeScreen';
import TradesListScreen from './screens/TradesListScreen';
import TradeDetailsScreen from './screens/TradeDetailsScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1a1a1a', height: 60, paddingBottom: 5 },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#aaa',

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          if (route.name === 'Trades') iconName = 'list-outline';
          if (route.name === 'AddTrade') iconName = 'add-circle-outline';
          if (route.name === 'Analytics') iconName = 'stats-chart-outline';
          if (route.name === 'Settings') iconName = 'settings-outline';

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Trades" component={TradesListScreen} />
      <Tab.Screen name="AddTrade" component={AddTradeScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Main Navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="TradeDetails" component={TradeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
