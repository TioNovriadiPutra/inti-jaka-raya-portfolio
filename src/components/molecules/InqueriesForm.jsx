import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useForm } from "react-hook-form";
import CustomTextInput from "@components/atoms/CustomTextInput";
import ButtonSubmit from "@components/atoms/ButtonSubmit";
import Mailer from "react-native-mail";
import useResponsive from "@hooks/useResponsive";

const InqueriesForm = () => {
  const { control, handleSubmit } = useForm();

  const { isTabletOrMobileDevice } = useResponsive();

  const handleSendEmail = (data) => {
    Mailer.mail(
      {
        subject: data.subject,
        recipients: "tionvriadi@gmail.com",
        body: data.name + " : " + data.message,
        isHTML: true,
      },
      (error, event) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent successfully!");
        }
      }
    );
  };

  return (
    <View
      style={[styles.container, !isTabletOrMobileDevice && styles.containerWeb]}
    >
      {isTabletOrMobileDevice ? (
        <View>
          <Text style={styles.title}>Inquiries</Text>
          <Text style={styles.subTitle}>For Any Further Information</Text>
        </View>
      ) : (
        <Text style={styles.title}>
          Inquiries
          <Text style={[styles.subTitle, styles.subTitleWeb]}>
            For Any Further Information
          </Text>
        </Text>
      )}

      <View style={styles.form}>
        <CustomTextInput
          name="name"
          defaultValue={null}
          control={control}
          placeholder="Name"
        />
        <CustomTextInput
          name="email"
          defaultValue={null}
          control={control}
          placeholder="Email"
        />
        <CustomTextInput
          name="subject"
          defaultValue={null}
          control={control}
          placeholder="Subject"
        />
        <CustomTextInput
          name="message"
          defaultValue={null}
          control={control}
          placeholder="Message"
          textArea
        />
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
