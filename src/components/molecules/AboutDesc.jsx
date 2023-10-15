import { StyleSheet, View } from "react-native";
import React from "react";
import WhatWeDo from "@components/atoms/WhatWeDo";
import WhatWeDoStory from "@components/atoms/WhatWeDoStory";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";

const AboutDesc = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb
      }
    >
      <WhatWeDo
        color={colors.Blue}
        question="What We Do"
        title="Delivering The Finest Industrial Maintenance Solution"
        func="whatWeDo"
      />
      <WhatWeDoStory />
    </View>
  );
};

export default AboutDesc;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMobile: {
    gap: 40,
  },
});
