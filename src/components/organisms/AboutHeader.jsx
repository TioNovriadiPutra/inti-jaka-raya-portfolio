import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import AboutQuotes from "@components/molecules/AboutQuotes";
import useResponsive from "@hooks/useResponsive";
import { colors } from "@themes/colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const AboutHeader = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <ImageBackground
      source={require("@assets/images/aboutBg.png")}
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <View style={styles.backdrop}>
        <AboutQuotes />
      </View>
    </ImageBackground>
  );
};

export default AboutHeader;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    marginTop: 64,
    resizeMode: "contain",
  },
  containerWeb: {
    height: HEIGHT + 64,
  },
  containerMobile: {
    height: 724,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.Backdrop,
  },
});
