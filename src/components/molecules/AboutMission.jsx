import { StyleSheet, View } from "react-native";
import React from "react";
import WhatWeDo from "@components/atoms/WhatWeDo";
import { colors } from "@themes/colors";
import MissionDescBox from "./MissionDescBox";
import useResponsive from "@hooks/useResponsive";

const AboutMission = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb}>
      <WhatWeDo color={colors.Orange} question="Our Mission" title="Berdedikasi untuk memberikan yang terbaik" />
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
