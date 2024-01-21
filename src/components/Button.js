import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity name={styles.button} onPress={onPress}>
      <Entypo
        name={icon}
        size={30}
        color={color ? color : "#f1f1f1"}
        marginLeft={180}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 175,
  },
});
