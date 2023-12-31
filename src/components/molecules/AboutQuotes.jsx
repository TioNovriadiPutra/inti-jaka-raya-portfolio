import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTranslation } from "react-i18next";

const AboutQuotes = () => {
  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  const titleAnim = useSharedValue(0);
  const quotesAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = titleAnim.value;

    return {
      opacity,
    };
  });

  const quotesAnimatedStyle = useAnimatedStyle(() => {
    const opacity = quotesAnim.value;

    return {
      opacity,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      titleAnim.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    }, 300);
    setTimeout(() => {
      quotesAnim.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    }, 900);
  }, []);

  return (
    <View style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}>
      <Animated.Text style={[styles.title, isTabletOrMobileDevice ? styles.titleMobile : styles.titleWeb, titleAnimatedStyle]}>
        {t("aboutQuotes1")}
        {`\n`}
        <Text style={styles.success}>{t("aboutQuotes2")}</Text>
      </Animated.Text>

      <Animated.View style={[isTabletOrMobileDevice ? styles.quotesContainerMobile : styles.quotesContainerWeb, quotesAnimatedStyle]}>
        <Text style={styles.quotes}>{t("aboutQuotes3")}</Text>
      </Animated.View>
    </View>
  );
};

export default AboutQuotes;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerWeb: {
    gap: 99,
  },
  containerMobile: {
    gap: 90,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.SemiBold,
    color: colors.White,
  },
  titleWeb: {
    fontSize: 64,
  },
  titleMobile: {
    fontSize: 36,
  },
  success: {
    color: colors.Orange,
  },
  quotesContainerWeb: {
    gap: 40,
  },
  quotesContainerMobile: {
    gap: 19,
    marginHorizontal: 19,
  },
  quotes: {
    textAlign: "center",
    fontFamily: fonts.MediumItalic,
    color: colors.White,
  },
  quotesWeb: {
    fontSize: 18,
  },
  quotesMobile: {
    fontSize: 14,
  },
});
