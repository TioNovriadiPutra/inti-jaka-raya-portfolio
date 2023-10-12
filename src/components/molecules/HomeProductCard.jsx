import { Dimensions, ImageBackground, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@themes/colors";
import DescType from "@components/atoms/DescType";
import { fonts } from "@themes/fonts";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const HomeProductCard = ({ isMobile }) => {
  const scroll = useRecoilValue(scrollState);

  const opacityAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(50);

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const handleEnter = () => {
    opacityAnim.value = withTiming(1, { duration: 1000 });
    translateYAnim.value = withTiming(0, { duration: 1000 });
  };

  const handleExit = () => {
    opacityAnim.value = withTiming(0, { duration: 300 });
    translateYAnim.value = withTiming(50, { duration: 300 });
  };

  if (!isMobile) {
    useEffect(() => {
      if (scroll >= HEIGHT + 720 + 1048 - 150) {
        handleEnter();
      } else if (scroll <= HEIGHT + 720 + 448) {
        handleExit();
      }
    }, [scroll]);
  }

  return (
    <AnimatedImageBackground
      source={require("@assets/images/product.png")}
      style={[styles.container, isMobile ? styles.containerMobile : styles.containerWeb, isMobile ? null : scaleAnimatedStyle]}
      imageStyle={styles.container}
    >
      <LinearGradient colors={[colors.Black, "transparent"]} start={[0, 1]} end={[0, -1]} style={[styles.backdrop, isMobile ? styles.backdropMobile : styles.backdropWeb]}>
        <DescType color={colors.WhiteBlur} title="Our Product" />
        <Text style={styles.title}>Unique Polymer Systems (UPS)</Text>
        <Text style={[styles.desc, isMobile ? styles.descMobile : styles.descWeb]}>
          Kami memberikan solusi unik seperti pelapis untuk peralatan saluran fluida dan perlindungan korosi untuk rig pengeboran lepas pantai. Solusi unik kami dapat diterapkan di semua sektor
          industri; Minyak & Gas, Kelautan (ThistleBond), Pembangkit Listrik, Kertas & Pulp, Bahan Kimia & Korosi, Air & Air Limbah, Petrokimia dan Industri Umum.
        </Text>
      </LinearGradient>
    </AnimatedImageBackground>
  );
};

export default HomeProductCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
  },
  containerWeb: {
    width: 1124,
    height: 539,
  },
  containerMobile: {
    width: WIDTH - 40,
    height: 466,
    resizeMode: "contain",
  },
  backdrop: {
    flex: 1,
    borderRadius: 24,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 24,
  },
  backdropMobile: {
    paddingHorizontal: 20,
    gap: 12,
  },
  backdropWeb: {
    paddingLeft: 20,
    paddingRight: 116,
    gap: 10,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
    color: colors.White,
  },
  desc: {
    fontFamily: fonts.PopRegular,
    color: colors.White,
  },
  descMobile: {
    fontSize: 12,
  },
  descWeb: {
    fontSize: 16,
  },
});
