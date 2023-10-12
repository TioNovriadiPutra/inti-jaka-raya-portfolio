import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DrawerButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 20,
    color: colors.Grey,
  },
});
