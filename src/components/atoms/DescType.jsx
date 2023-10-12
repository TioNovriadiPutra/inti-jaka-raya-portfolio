import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DescType = ({ color, title }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DescType;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingVertical: 6,
    borderRadius: 20,
  },
  title: {
    fontFamily: fonts.PopRegular,
    fontSize: 12,
    color: colors.White,
  },
});
