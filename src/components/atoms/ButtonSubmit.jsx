import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { useTranslation } from "react-i18next";

const ButtonSubmit = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{t("contactSubmit")}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Orange,
    alignSelf: "flex-end",
    paddingHorizontal: 38,
    paddingVertical: 9,
    borderRadius: 8,
  },
  label: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 16,
    color: colors.White,
  },
});
