import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useResponsive from "@hooks/useResponsive";

const NewsTitle = ({ title, date }) => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb
      }
    >
      <Text
        style={[
          styles.title,
          isTabletOrMobileDevice ? styles.titleMobile : styles.titleWeb,
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.date,
          isTabletOrMobileDevice ? styles.dateMobile : styles.dateWeb,
        ]}
      >
        {date}
      </Text>
    </View>
  );
};

export default NewsTitle;

const styles = StyleSheet.create({
  containerWeb: {
    gap: 18,
  },
  containerMobile: {
    gap: 12,
  },
  title: {
    fontFamily: fonts.SemiBold,
    color: colors.Black,
  },
  titleWeb: {
    fontSize: 44,
  },
  titleMobile: {
    fontSize: 24,
  },
  date: {
    fontFamily: fonts.PopRegular,
    color: colors.Placeholder,
  },
  dateWeb: {
    fontSize: 18,
  },
  dateMobile: {
    fontSize: 14,
  },
});
