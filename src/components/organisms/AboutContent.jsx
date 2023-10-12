import { StyleSheet, View } from "react-native";
import React from "react";
import AboutDesc from "@components/molecules/AboutDesc";
import AboutMission from "@components/molecules/AboutMission";
import useResponsive from "@hooks/useResponsive";

const AboutContent = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <AboutDesc />
      <AboutMission />
    </View>
  );
};

export default AboutContent;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  containerWeb: {
    paddingHorizontal: 182,
    paddingTop: 350,
    gap: 223,
  },
  containerMobile: {
    paddingHorizontal: 20,
    paddingTop: 265,
    gap: 60,
  },
});
