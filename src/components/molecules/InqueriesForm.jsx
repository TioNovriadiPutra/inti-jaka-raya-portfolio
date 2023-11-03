import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import CustomTextInput from "@components/atoms/CustomTextInput";
import ButtonSubmit from "@components/atoms/ButtonSubmit";
import useResponsive from "@hooks/useResponsive";
import email from "react-native-email";
import { useTranslation } from "react-i18next";

const InqueriesForm = () => {
  const [name, setName] = useState("");
  const [emailSend, setEmailSend] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMassage] = useState("");
  const { isTabletOrMobileDevice } = useResponsive();
  const { t } = useTranslation();

  const handleSendEmail = (name, subject, message) => {
    email("sales_ijr@intijakaraya.com", {
      subject: name + " - " + subject,
      body: message,
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
        <CustomTextInput value={name} setValue={setName} placeholder={t("contactName")} />
        <CustomTextInput value={emailSend} setValue={setEmailSend} placeholder="Email" />
        <CustomTextInput value={subject} setValue={setSubject} placeholder="Subject" />
        <CustomTextInput value={message} setValue={setMassage} placeholder={t("contactMessage")} textArea />
      </View>

      <ButtonSubmit onPress={() => handleSendEmail(name, subject, message)} />
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
