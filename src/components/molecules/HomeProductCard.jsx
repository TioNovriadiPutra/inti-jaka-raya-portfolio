import { Dimensions, ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@themes/colors";
import DescType from "@components/atoms/DescType";
import { fonts } from "@themes/fonts";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { scrollState } from "@store/scrollState";
import { showProductModalState } from "@store/productState";
import { useTranslation } from "react-i18next";
import { productLayoutState } from "@store/sectionState";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const WIDTH = Dimensions.get("window").width;

const HomeProductCard = ({ isMobile }) => {
  const scroll = useRecoilValue(scrollState);
  const setShowProductModal = useSetRecoilState(showProductModalState);
  const productLayout = useRecoilValue(productLayoutState);

  const { t } = useTranslation();

  const opacityAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(50);
  const hoverAnim = useSharedValue(1);

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const hoverAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: hoverAnim.value }],
    };
  });

  const handleHoverIn = () => {
    hoverAnim.value = withTiming(1.05, { duration: 300 });
  };

  const handleHoverOut = () => {
    hoverAnim.value = withTiming(1, { duration: 300 });
  };

  const handlePress = () => {
    setShowProductModal(true);
  };

  const handleEnter = () => {
    opacityAnim.value = withTiming(1, { duration: 1000 });
    translateYAnim.value = withTiming(0, { duration: 1000 });
  };

  const handleExit = () => {
    opacityAnim.value = withTiming(0, { duration: 300 });
    translateYAnim.value = withTiming(50, { duration: 300 });
  };

  useEffect(() => {
    if (scroll >= productLayout - 200) {
      handleEnter();
    } else if (scroll <= productLayout - 400) {
      handleExit();
    }
  }, [scroll]);

  return (
    <AnimatedPressable
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      style={[styles.container, isMobile ? styles.containerMobile : styles.containerWeb, scaleAnimatedStyle, !isMobile && hoverAnimatedStyle]}
      onPress={handlePress}
    >
      <ImageBackground source={require("@assets/images/product.png")} style={styles.backgroundImage} imageStyle={styles.container}>
        <LinearGradient colors={[colors.Black, "transparent"]} start={[0, 1]} end={[0, -1]} style={[styles.backdrop, isMobile ? styles.backdropMobile : styles.backdropWeb]}>
          <DescType color={colors.WhiteBlur} title={t("productTitle")} />
          <Text style={styles.title}>Unique Polymer Systems (UPS)</Text>
          <Text style={[styles.desc, isMobile ? styles.descMobile : styles.descWeb]}>{t("productDesc")}</Text>
        </LinearGradient>
      </ImageBackground>
    </AnimatedPressable>
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
  },
  backgroundImage: {
    flex: 1,
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
