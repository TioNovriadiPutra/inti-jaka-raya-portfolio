import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useForm } from "react-hook-form";
import CustomTextInput from "@components/atoms/CustomTextInput";
import ButtonSubmit from "@components/atoms/ButtonSubmit";
import useResponsive from "@hooks/useResponsive";
import email from "react-native-email";
import { useTranslation } from "react-i18next";

const InqueriesForm = () => {
  const { control, handleSubmit } = useForm();
  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  const handleSendEmail = (data) => {
    email("sales_ijr@intijakaraya.com", {
      subject: data.name + " - " + data.subject,
      body: data.message,
      checkCanOpen: false,
    }).catch((error) => console.log(error));
  };

  return (
    <View style={[styles.container, !isTabletOrMobileDevice && styles.containerWeb]}>
      {isTabletOrMobileDevice ? (
        <View>
          <Text style={styles.title}>{t("contactTitle")}</Text>
          <Text style={styles.subTitle}>{t("contactSubtitle")}</Text>
        </View>
      ) : (
        <Text style={styles.title}>
          {t("contactTitle")}
          <Text style={[styles.subTitle, styles.subTitleWeb]}>{t("contactSubtitle")}</Text>
        </Text>
      )}

      <View style={styles.form}>
        <CustomTextInput name="name" defaultValue={null} control={control} placeholder={t("contactName")} />
        <CustomTextInput name="email" defaultValue={null} control={control} placeholder="Email" />
        <CustomTextInput name="subject" defaultValue={null} control={control} placeholder="Subject" />
        <CustomTextInput name="message" defaultValue={null} control={control} placeholder={t("contactMessage")} textArea />
      </View>

      <ButtonSubmit onPress={handleSubmit(handleSendEmail)} />
    </View>
  );
};

export default InqueriesForm;

const styles = StyleSheet.create({
  container: {
    gap: 22,
  },
  containerWeb: {
    width: 536,
  },
  title: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 28,
    color: colors.White,
  },
  subTitle: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.White,
  },
  subTitleWeb: {
    marginLeft: 22,
  },
  form: {
    gap: 16,
  },
});
