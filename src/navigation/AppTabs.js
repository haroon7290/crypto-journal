import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../context/AuthContext";
import { Alert } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import TradesScreen from "../screens/TradesScreen";
import AddTradeScreen from "../screens/AddTradeScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const { isLoggedIn } = useContext(AuthContext);

  const protect = (screen) => (isLoggedIn ? screen : LoginScreen);

  const block = () => {
    if (!isLoggedIn) {
      Alert.alert("Please Login", "You must login to access this section.");
    }
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Home"
        component={protect(HomeScreen)}
        listeners={{ tabPress: block }}
      />
      <Tab.Screen
      name="Signup"
      component={SignupScreen}
      listeners={{ tabPress: () => {} }}
      />

      <Tab.Screen
        name="Trades"
        component={protect(TradesScreen)}
        listeners={{ tabPress: block }}
      />

      <Tab.Screen
        name="Add Trade"
        component={protect(AddTradeScreen)}
        listeners={{ tabPress: block }}
      />

      <Tab.Screen
        name="Analytics"
        component={protect(AnalyticsScreen)}
        listeners={{ tabPress: block }}
      />

      <Tab.Screen
        name="Settings"
        component={protect(SettingsScreen)}
        listeners={{ tabPress: block }}
      />

    </Tab.Navigator>
  );
}
