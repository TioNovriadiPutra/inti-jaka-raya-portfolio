import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useTranslation } from "react-i18next";

const HomeGalleryTitle = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, isMobile ? styles.titleMobile : styles.titleWeb]}>{t("galleryTitle")}</Text>
      <Text style={[styles.desc, isMobile ? styles.descMobile : styles.descWeb]}>{t("gallerySubTitle")}</Text>
    </View>
  );
};

export default HomeGalleryTitle;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.SemiBold,
    color: colors.Black,
  },
  titleMobile: {
    fontSize: 24,
  },
  titleWeb: {
    fontSize: 44,
  },
  desc: {
    fontFamily: fonts.PopRegular,
    color: colors.Orange,
  },
  descMobile: {
    fontSize: 12,
  },
  descWeb: {
    fontSize: 18,
  },
});
