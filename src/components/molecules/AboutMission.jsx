import { StyleSheet, View } from "react-native";
import React from "react";
import WhatWeDo from "@components/atoms/WhatWeDo";
import { colors } from "@themes/colors";
import MissionDescBox from "./MissionDescBox";
import useResponsive from "@hooks/useResponsive";
import { useTranslation } from "react-i18next";
import { useSetRecoilState } from "recoil";
import { aboutMissionLayoutState } from "@store/sectionState";
import { setSectionLayout } from "@utils/helper/setSectionLayout";

const AboutMission = () => {
  const setAboutMissionLayout = useSetRecoilState(aboutMissionLayoutState);

  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb} onLayout={(event) => setSectionLayout(event, setAboutMissionLayout)}>
      <WhatWeDo color={colors.Orange} question={t("mission")} title={t("missionTitle")} />
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
