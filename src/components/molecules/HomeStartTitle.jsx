import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useTranslation } from "react-i18next";

const HomeStartTitle = ({ mobile }) => {
  const { t } = useTranslation();

  return (
    <View style={mobile ? styles.containerMobile : styles.container}>
      <Text style={[styles.title, !mobile ? styles.titleWeb : null]}>{t("welcome")}</Text>
      <Text style={[styles.subTitle, !mobile ? styles.titleWeb : null]}>{t("welcomeDesc")}</Text>
    </View>
  );
};

export default HomeStartTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: 163.5,
    gap: 18,
  },
  containerMobile: {
    marginTop: 100,
    gap: 22,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 40,
    color: colors.White,
  },
  titleWeb: {
    width: 730,
  },
  subTitle: {
    fontFamily: fonts.PopRegular,
    fontSize: 20,
    color: colors.White,
  },
});
