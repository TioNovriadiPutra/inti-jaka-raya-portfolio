import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const NavbarButton = ({
  label,
  onPress,
  white,
  withBorder,
  withBackground,
}) => {
  const borderAnim = useRef(new Animated.Value(0)).current;
  const textBorderAnim = useRef(new Animated.Value(0)).current;
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  const textButtonAnim = useRef(new Animated.Value(0)).current;

  const handleHoverIn = () => {
    if (withBorder === true) {
      Animated.timing(borderAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(textBorderAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else if (withBackground === true) {
      Animated.timing(backgroundAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(textButtonAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleHoverOut = () => {
    if (withBorder === true) {
      Animated.timing(borderAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(textBorderAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else if (withBackground === true) {
      Animated.timing(backgroundAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(textButtonAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      <Animated.View
        style={[
          withBorder
            ? styles.box
            : withBackground
            ? styles.boxBackground
            : null,
          {
            backgroundColor: withBorder
              ? borderAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["rgba(255, 255, 255, 0)", colors.White],
                })
              : withBackground
              ? backgroundAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [colors.Blue, colors.Orange],
                })
              : null,
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.label,
            {
              color: withBorder
                ? textBorderAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [colors.White, colors.Black],
                  })
                : textButtonAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      white ? colors.White : colors.Grey,
                      colors.Orange,
                    ],
                  }),
            },
            {
              fontFamily:
                withBorder || withBackground ? fonts.SemiBold : fonts.Medium,
            },
          ]}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  box: {
    borderWidth: 2,
    borderColor: colors.White,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
  boxBackground: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
});
