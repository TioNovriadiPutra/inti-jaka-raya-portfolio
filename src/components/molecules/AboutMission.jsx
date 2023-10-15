import { StyleSheet, View } from "react-native";
import React from "react";
import WhatWeDo from "@components/atoms/WhatWeDo";
import { colors } from "@themes/colors";
import MissionDescBox from "./MissionDescBox";
import useResponsive from "@hooks/useResponsive";

const AboutMission = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb
      }
    >
      <WhatWeDo
        color={colors.Orange}
        question="Our Mission"
        title="We are dedicated to offering the best goods and services."
      />
      <MissionDescBox />
    </View>
  );
};

export default AboutMission;

const styles = StyleSheet.create({
  containerWeb: {
    gap: 70,
  },
  containerMobile: {
    gap: 60,
  },
});
