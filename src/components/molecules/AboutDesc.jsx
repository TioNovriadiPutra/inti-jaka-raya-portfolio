import { StyleSheet, View } from "react-native";
import React from "react";
import WhatWeDo from "@components/atoms/WhatWeDo";
import WhatWeDoStory from "@components/atoms/WhatWeDoStory";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import { useTranslation } from "react-i18next";
import { useSetRecoilState } from "recoil";
import { aboutDescLayoutState } from "@store/sectionState";
import { setSectionLayout } from "@utils/helper/setSectionLayout";

const AboutDesc = () => {
  const setAboutDescLayout = useSetRecoilState(aboutDescLayoutState);

  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb} onLayout={(event) => setSectionLayout(event, setAboutDescLayout)}>
      <WhatWeDo color={colors.Blue} question={t("whatWeDo")} title={t("whatWeDoTitle")} func="whatWeDo" />
      <WhatWeDoStory />
    </View>
  );
};

export default AboutDesc;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },
  containerMobile: {
    gap: 40,
  },
});
