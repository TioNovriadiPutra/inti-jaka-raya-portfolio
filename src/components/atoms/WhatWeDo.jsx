import { Dimensions, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const HEIGHT = Dimensions.get("window").height;

const WhatWeDo = ({ color, question, title, func }) => {
  const scroll = useRecoilValue(scrollState);

  const { isTabletOrMobileDevice } = useResponsive();

  const opacityAnim = useSharedValue(0);
  const translateXAnim = useSharedValue(-50);

  const whatWeDoAnimatedStyle = useAnimatedStyle(() => {
    const opacity = opacityAnim.value;
    const translateX = translateXAnim.value;

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  useEffect(() => {
    if (func === "whatWeDo") {
      if (isTabletOrMobileDevice ? scroll >= HEIGHT - 300 : scroll >= HEIGHT) {
        opacityAnim.value = withTiming(1, { duration: 1000 });
        translateXAnim.value = withTiming(0, { duration: 1000 });
      } else if (scroll === 0) {
        opacityAnim.value = withTiming(0, { duration: 1000 });
        translateXAnim.value = withTiming(-50, { duration: 1000 });
      }
    } else {
      if (isTabletOrMobileDevice ? scroll >= HEIGHT + 200 : scroll >= HEIGHT + 500) {
        opacityAnim.value = withTiming(1, { duration: 1000 });
        translateXAnim.value = withTiming(0, { duration: 1000 });
      } else if (isTabletOrMobileDevice ? scroll <= HEIGHT - 300 : scroll <= HEIGHT) {
        opacityAnim.value = withTiming(0, { duration: 1000 });
        translateXAnim.value = withTiming(-50, { duration: 1000 });
      }
    }
  }, [scroll]);

  return (
    <Animated.View style={[!isTabletOrMobileDevice && styles.container, whatWeDoAnimatedStyle]}>
      <Text style={[styles.question, isTabletOrMobileDevice ? styles.questionMobile : styles.questionWeb, { color: color }]}>{question}</Text>
      <Text style={[styles.do, isTabletOrMobileDevice ? styles.doMobile : styles.doWeb]}>{title}</Text>
    </Animated.View>
  );
};

export default WhatWeDo;

const styles = StyleSheet.create({
  container: {
    width: 546,
  },
  question: {
    fontFamily: fonts.Medium,
  },
  questionWeb: {
    fontSize: 22,
  },
  questionMobile: {
    fontSize: 20,
  },
  do: {
    fontFamily: fonts.SemiBold,
    color: colors.Black,
  },
  doWeb: {
    fontSize: 34,
  },
  doMobile: {
    fontSize: 24,
  },
});
