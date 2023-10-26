import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, scrollRefState } from "@store/scrollState";
import { navState } from "@store/navState";

const BottomNavbarButton = ({ label, customPress }) => {
  const [page, setPage] = useRecoilState(pageState);
  const scrollRef = useRecoilValue(scrollRefState);
  const nav = useRecoilValue(navState);

  const colorAnim = useSharedValue(0);

  const colorAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(colorAnim.value, [0, 1], [colors.White, colors.Orange]);

    return {
      color: color,
    };
  });

  const handleHoverIn = () => {
    colorAnim.value = withTiming(1);
  };

  const handleHoverOut = () => {
    colorAnim.value = withTiming(0);
  };

  const handlePress = () => {
    if (page === label) {
      scrollRef.current.scrollTo({ animation: true, y: 0 });
    } else {
      setPage(label);
      nav.navigate(label);
    }
  };

  return (
    <Pressable onHoverIn={handleHoverIn} onHoverOut={handleHoverOut} onPress={customPress ? customPress : handlePress}>
      <Animated.Text style={[styles.label, colorAnimatedStyle]}>{label}</Animated.Text>
    </Pressable>
  );
};

export default BottomNavbarButton;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.PopRegular,
    fontSize: 16,
  },
});
