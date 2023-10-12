import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const ButtonSubmit = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>Submit</Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Orange,
    alignSelf: "flex-end",
    paddingHorizontal: 38,
    paddingVertical: 9,
    borderRadius: 8,
  },
  label: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 16,
    color: colors.White,
  },
});
