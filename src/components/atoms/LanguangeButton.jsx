import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTranslation } from "react-i18next";
import { colors } from "@themes/colors";

const LanguangeButton = ({ label, lang, start }) => {
  const { i18n } = useTranslation();

  const labelAnim = useSharedValue(0);

  const labelAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(labelAnim.value, [0, 1], [start ? colors.White : colors.LangGrey, start ? colors.LangBlue : colors.White]);

    return {
      color,
    };
  });

  const handlePress = () => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (i18n.language === lang.toLowerCase()) {
      labelAnim.value = withTiming(1, { duration: 300 });
    } else {
      labelAnim.value = withTiming(0, { duration: 300 });
    }
  }, [i18n.language]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Animated.Text style={[styles.label, labelAnimatedStyle]}>{label}</Animated.Text>
    </TouchableOpacity>
  );
};

export default LanguangeButton;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    zIndex: 2,
  },
  label: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
  },
});
