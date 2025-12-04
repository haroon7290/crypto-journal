import React from "react";
import { View, Text } from "react-native";

export default function AddTradeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Trade Screen</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 20 },
};
