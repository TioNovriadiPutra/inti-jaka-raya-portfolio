import { Dimensions, Image, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollState } from "@store/scrollState";
import useResponsive from "@hooks/useResponsive";

const HEIGHT = Dimensions.get("window").height;

const MissionBox = ({ icon, desc, title, index }) => {
  const scroll = useRecoilValue(scrollState);

  const { isTabletOrMobileDevice } = useResponsive();

  const opacityAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(50);

  const boxAnimatedStyle = useAnimatedStyle(() => {
    const opacity = opacityAnim.value;
    const translateY = translateYAnim.value;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  useEffect(() => {
    if (isTabletOrMobileDevice ? scroll >= HEIGHT + 200 : scroll >= HEIGHT + 500) {
      setTimeout(() => {
        opacityAnim.value = withTiming(1, { duration: 800 });
        translateYAnim.value = withTiming(0, { duration: 800 });
      }, 300 * index);
    } else if (isTabletOrMobileDevice ? scroll <= HEIGHT - 300 : scroll <= HEIGHT) {
      opacityAnim.value = withTiming(0, { duration: 300 });
      translateYAnim.value = withTiming(50, { duration: 300 });
    }
  }, [scroll]);

  return (
    <Animated.View style={[styles.container, boxAnimatedStyle]}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </Animated.View>
  );
};

export default MissionBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightGrey,
    borderRadius: 16,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 51,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 58,
  },
  desc: {
    fontFamily: fonts.PopRegular,
    fontSize: 18,
    color: colors.DescGrey,
  },
  title: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 18,
    color: colors.Black,
    marginBottom: 12,
  },
});
