import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";
import { useTranslation } from "react-i18next";
import { aboutDescLayoutState } from "@store/sectionState";

const WhatWeDoStory = () => {
  const scroll = useRecoilValue(scrollState);
  const aboutDescLayout = useRecoilValue(aboutDescLayoutState);

  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  const opacityAnim = useSharedValue(0);
  const translateXAnim = useSharedValue(50);

  const whatWeDoStoryAnimatedStyle = useAnimatedStyle(() => {
    const opacity = opacityAnim.value;
    const translateX = translateXAnim.value;

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  useEffect(() => {
    if (scroll >= aboutDescLayout + 200) {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      translateXAnim.value = withTiming(0, { duration: 1000 });
    } else if (scroll <= aboutDescLayout) {
      opacityAnim.value = withTiming(0, { duration: 1000 });
      translateXAnim.value = withTiming(50, { duration: 1000 });
    }
  }, [scroll]);

  return (
    <Animated.View style={[!isTabletOrMobileDevice && styles.container, whatWeDoStoryAnimatedStyle]}>
      <Text style={styles.story}>{t("whatWeDoDesc")}</Text>
    </Animated.View>
  );
};

export default WhatWeDoStory;

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  story: {
    fontFamily: fonts.PopLight,
    fontSize: 18,
    color: colors.Black,
    textAlign: "justify",
  },
});
