import { StyleSheet, View } from "react-native";
import React from "react";
import MissionBox from "@components/atoms/MissionBox";
import useResponsive from "@hooks/useResponsive";

const MissionDescBox = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb
      }
    >
      <MissionBox
        index={0}
        icon={require("@assets/images/graph.png")}
        title="Helps Improve Business"
        desc="Ensure profitability that can support the growth of the company."
      />
      <MissionBox
        index={1}
        icon={require("@assets/images/insurrance.png")}
        title="Maintain Trust"
        desc="Building trust through innovation in quality, products, and services."
      />
      <MissionBox
        index={3}
        icon={require("@assets/images/idea.png")}
        title="Providing Creative Solutions"
        desc="Encourage creative competence to win the competition."
      />
    </View>
  );
};

export default MissionDescBox;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 70,
  },
  containerMobile: {
    gap: 20,
  },
});
