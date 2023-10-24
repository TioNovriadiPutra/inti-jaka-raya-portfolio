import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const ProductDropdownItem = ({ label, handlePress }) => {
  return (
    <Pressable style={styles.itemBtn} onPress={handlePress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default ProductDropdownItem;

const styles = StyleSheet.create({
  itemBtn: {
    marginHorizontal: 14,
    marginVertical: 3,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  label: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.Black,
  },
});
