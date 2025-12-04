import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./src/navigation/AppTabs";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </AuthProvider>
  );
}
