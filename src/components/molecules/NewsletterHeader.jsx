import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const NewsletterHeader = () => {
  return (
    <ImageBackground
      source={require("@assets/images/newsletterBg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>NEWSTLETTER</Text>
        <Text style={styles.subTitle}>
          Latest and best article selected by our editorial choice
        </Text>
      </View>
    </ImageBackground>
  );
};

export default NewsletterHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 276,
    gap: 8,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 54,
    color: colors.White,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: fonts.PopRegular,
    fontSize: 16,
    color: colors.White,
    textAlign: "center",
  },
  background: {
    alignItems: "center",
    paddingVertical: 35,
    resizeMode: "cover",
  },
});
