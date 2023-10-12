import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const Info = ({ icon, info }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />

      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  info: {
    fontFamily: fonts.PopRegular,
    fontSize: 16,
    color: colors.White,
  },
});
