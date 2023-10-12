import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const ButtonNext = ({ func = "next", onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        func === "previous" ? styles.prev : styles.next,
      ]}
      onPress={onPress}
    >
      <Image
        source={
          func === "next"
            ? require("@assets/images/next.png")
            : require("@assets/images/previous.png")
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 34,
  },
  container: {
    backgroundColor: colors.White,
    paddingHorizontal: 28,
    paddingVertical: 19,
    borderRadius: 50,
    shadowColor: colors.Black,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    borderWidth: 0.8,
    borderColor: colors.BorderGrey,
    position: "absolute",
  },
  prev: {
    left: 10,
    zIndex: 999,
  },
  next: {
    right: -10,
  },
});
