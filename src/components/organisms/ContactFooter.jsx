import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";

const ContactFooter = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Text style={styles.copyright}>&copy; All rights reserved.</Text>
    </View>
  );
};

export default ContactFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerWeb: {
    marginTop: 67,
  },
  containerMobile: {
    marginTop: 55,
  },
  copyright: {
    textAlign: "center",
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.White,
  },
});
