import { StyleSheet, View } from "react-native";
import React from "react";
import MissionBox from "@components/atoms/MissionBox";
import useResponsive from "@hooks/useResponsive";
import { useTranslation } from "react-i18next";

const MissionDescBox = () => {
  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb}>
      <MissionBox index={0} icon={require("@assets/images/graph.png")} title={t("mission1")} desc={t("missionDesc1")} />
      <MissionBox index={1} icon={require("@assets/images/insurrance.png")} title={t("mission2")} desc={t("missionDesc2")} />
      <MissionBox index={3} icon={require("@assets/images/idea.png")} title={t("mission3")} desc={t("missionDesc3")} />
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
