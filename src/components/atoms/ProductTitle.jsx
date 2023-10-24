import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const ProductTitle = () => {
  const titleAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(titleAnim.value, [0, 1], [0, 714]);
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
      <Animated.Text style={styles.title}>Our Product</Animated.Text>
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
    fontSize: 24,
    color: colors.Black,
  },
});
