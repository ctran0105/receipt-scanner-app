import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function CaptureButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.capture}
      onPress={onPress}
    ></TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  capture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: "lightgray",
    marginLeft: 160,
    marginTop: 20,
  },
});
