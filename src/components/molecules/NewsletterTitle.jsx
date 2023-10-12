import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import ButtonText from "@components/atoms/ButtonText";

const NewsletterTitle = ({ isMobile }) => {
  return (
    <View style={!isMobile && styles.containerWeb}>
      <Text style={styles.title}>Newsletter</Text>
      {!isMobile && <ButtonText label="See More" />}
    </View>
  );
};

export default NewsletterTitle;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 195,
    paddingRight: 196,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 32,
    color: colors.Orange,
  },
});
