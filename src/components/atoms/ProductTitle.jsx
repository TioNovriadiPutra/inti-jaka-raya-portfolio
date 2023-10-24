import { Dimensions, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import useResponsive from "@hooks/useResponsive";

const WIDTH = Dimensions.get("window").width;

const ProductTitle = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  const titleAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(titleAnim.value, [0, 1], [0, isTabletOrMobileDevice ? WIDTH - 40 : 714]);
    const opacity = interpolate(titleAnim.value, [0, 1], [0, 1]);

    return {
      width,
      opacity,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      titleAnim.value = withTiming(1, { duration: 1000 });
    }, 800);
  }, []);

  return (
    <Animated.View style={[styles.titleContainer, titleAnimatedStyle]}>
      <Animated.Text style={[styles.title, isTabletOrMobileDevice ? styles.titleMobile : styles.titleWeb]}>Our Product</Animated.Text>
    </Animated.View>
  );
};

export default ProductTitle;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: colors.Orange,
    paddingBottom: 12,
  },
  title: {
    fontFamily: fonts.SemiBold,
    color: colors.Black,
  },
  titleWeb: {
    fontSize: 24,
  },
  titleMobile: {
    fontSize: 16,
  },
});
