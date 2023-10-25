import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import LanguangeButton from "@components/atoms/LanguangeButton";
import { colors } from "@themes/colors";
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTranslation } from "react-i18next";

const LanguangeChange = ({ start = false }) => {
  const { i18n } = useTranslation();

  const blockAnim = useSharedValue(0);

  const blockAnimatedStyle = useAnimatedStyle(() => {
    const left = interpolate(blockAnim.value, [0, 1], [50, 0]);

    return {
      left: `${left}%`,
    };
  });

  const secondBlockAnimatedStyle = useAnimatedStyle(() => {
    const left = interpolate(blockAnim.value, [0, 1], [50, 0]);
    const backgroundColor = interpolateColor(blockAnim.value, [0, 1], [colors.Orange, colors.Blue]);

    return {
      left: `${left}%`,
      backgroundColor,
    };
  });

  useEffect(() => {
    if (i18n.language === "id") {
      blockAnim.value = withTiming(1, { duration: 300 });
    } else {
      blockAnim.value = withTiming(0, { duration: 300 });
    }
  }, [i18n.language]);

  return (
    <View style={[styles.container, { backgroundColor: !start && colors.LightGrey, borderRadius: !start && 4 }]}>
      <LanguangeButton label="ID" lang={"id"} start={start} />
      <LanguangeButton label="EN" lang={"en"} start={start} />
      <Animated.View style={[styles.block, start ? blockAnimatedStyle : secondBlockAnimatedStyle]} />
    </View>
  );
};

export default LanguangeChange;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  block: {
    position: "absolute",
    height: "100%",
    width: "50%",
    backgroundColor: colors.White,
    zIndex: 1,
    borderRadius: 4,
  },
});
