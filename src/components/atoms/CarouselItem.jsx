import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

const CarouselItem = ({ data, isMobile, itemWidth, animStyleImage }) => {
  return (
    <Animated.Image
      source={data.image}
      style={[
        styles.image,
        { width: itemWidth, height: (itemWidth / 4) * 3 },
        isMobile ? styles.imageMobile : styles.imageWeb,
        animStyleImage,
      ]}
    />
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  image: {
    borderRadius: 24,
  },
  imageMobile: {
    height: 241,
  },
  imageWeb: {
    height: 270,
  },
});
