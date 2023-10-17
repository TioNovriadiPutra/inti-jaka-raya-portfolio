import { StyleSheet } from "react-native";
import React from "react";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

const CarouselItem = ({ data, isMobile, itemWidth, animationValue }) => {
  const scaleAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [-1, 0, 1], [0.8, 1, 0.8], Extrapolate.CLAMP);

    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0.5, 1, 0.5], Extrapolate.CLAMP);

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return <Animated.Image source={data.image} style={[styles.image, { width: itemWidth, height: isMobile ? 241 : (itemWidth / 4) * 3 }, !isMobile && scaleAnimatedStyle]} />;
};

export default CarouselItem;

const styles = StyleSheet.create({
  image: {
    borderRadius: 24,
  },
});
