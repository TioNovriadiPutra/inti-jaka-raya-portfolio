import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const ProductScrollButton = ({ func = "next", onPress }) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Image source={func === "next" ? require("@assets/images/nextBlack.png") : require("@assets/images/previousBlack.png")} style={styles.icon} />
    </Pressable>
  );
};

export default ProductScrollButton;

const styles = StyleSheet.create({
  icon: {
    width: 10.67,
    height: 22.67,
  },
  btn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: colors.Hightlight,
  },
});
