import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const HomeStartFooter = ({ mobile }) => {
  return (
    <View
      style={[
        styles.textBox,
        mobile ? styles.textBoxMobile : styles.textBoxWeb,
      ]}
    >
      <Text style={styles.text}>
        Getting Bigger, Faster, & Stronger Than Ever
      </Text>
    </View>
  );
};

export default HomeStartFooter;

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: colors.BlueBlur,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 26,
  },
  textBoxWeb: {
    width: 344,
    height: 178,
    alignSelf: "flex-end",
  },
  textBoxMobile: {
    height: 154,
  },
  text: {
    fontFamily: fonts.SemiBold,
    fontSize: 22,
    color: colors.White,
    textAlign: "center",
  },
});
