import { Animated, Easing, Pressable, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import { scrollState } from "@store/scrollState";

const ButtonText = ({ label, isMobile, onPress }) => {
  const nav = useRecoilValue(navState);
  const setScroll = useSetRecoilState(scrollState);

  const textColorIndex = useRef(new Animated.Value(0)).current;
  const lineAnim = useRef(new Animated.Value(0)).current;

  const handleSeeMore = () => {
    nav.navigate("Newsletter");
    setScroll(0);
  };

  return (
    <Pressable
      onHoverIn={() => {
        Animated.timing(textColorIndex, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
        Animated.timing(lineAnim, {
          toValue: 102,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }}
      onHoverOut={() => {
        Animated.timing(textColorIndex, {
          toValue: 0,
          duration: 300,
          easing: Easing.exp,
          useNativeDriver: false,
        }).start();
        Animated.timing(lineAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }}
      onPress={handleSeeMore}
    >
      <Animated.Text
        style={[
          styles.label,
          {
            color: textColorIndex.interpolate({
              inputRange: [0, 1],
              outputRange: [colors.Grey, colors.Orange],
            }),
          },
        ]}
      >
        {label}
      </Animated.Text>
      <Animated.View
        style={[
          styles.line,
          { width: lineAnim, alignSelf: isMobile ? "center" : "auto" },
        ]}
      />
    </Pressable>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 22,
    textAlign: "center",
  },
  line: {
    height: 2,
    backgroundColor: colors.Orange,
  },
});
