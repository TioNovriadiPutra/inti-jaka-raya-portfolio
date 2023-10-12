import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";

const HEIGHT = Dimensions.get("window").height;

const WhatWeDoStory = () => {
  const scroll = useRecoilValue(scrollState);

  const { isTabletOrMobileDevice } = useResponsive();

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
    if (isTabletOrMobileDevice ? scroll >= 724 : scroll >= HEIGHT + 64) {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      translateXAnim.value = withTiming(0, { duration: 1000 });
    } else if (isTabletOrMobileDevice ? scroll <= 224 : scroll <= 504) {
      opacityAnim.value = withTiming(0, { duration: 1000 });
      translateXAnim.value = withTiming(50, { duration: 1000 });
    }
  }, [scroll]);

  return (
    <Animated.View style={[!isTabletOrMobileDevice && styles.container, whatWeDoStoryAnimatedStyle]}>
      <Text style={styles.story}>
        Kami berdedikasi untuk menyediakan solusi terbaik yang sesuai dengan setiap kebutuhan yang klien minta dari berbagai industri. Kami menggunakan produk terbaik serta pelayanan yang memastikan
        kepuasan klien menjadi tujuan utama dari hadirnya kami sebagai solusi atas permasalahan industrial. Pelayanan kami dapat meningkatkan effisiensi bisnis, memberikan jaminan proteksi jangka
        panjang, hingga penghematan biaya perawatan.
      </Text>
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
