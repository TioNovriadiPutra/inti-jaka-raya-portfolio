import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import DescType from "@components/atoms/DescType";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const WIDTH = Dimensions.get("window").width;

const HomeDescText = ({ color, type, title, desc, isMobile }) => {
  return (
    <View style={[styles.container, isMobile ? styles.containerMobile : styles.containerWeb]}>
      <DescType color={color} title={type} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default HomeDescText;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 24,
    color: colors.Black,
  },
  container: {
    alignItems: "flex-start",
    gap: 12,
  },
  containerMobile: {
    width: WIDTH - 40,
  },
  containerWeb: {
    width: 473,
  },
  desc: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.LightBlack,
    textAlign: "justify",
  },
});
