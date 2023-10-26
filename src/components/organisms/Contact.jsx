import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import CompanyInfo from "@components/molecules/CompanyInfo";
import InqueriesForm from "@components/molecules/InqueriesForm";
import useResponsive from "@hooks/useResponsive";
import SocialMedia from "@components/molecules/SocialMedia";
import ContactBottomNavbar from "@components/molecules/ContactBottomNavbar";
import ContactFooter from "./ContactFooter";

const Contact = ({ scrollRef }) => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={[styles.container, isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb]}>
      <View style={[styles.inputContainer, isTabletOrMobileDevice ? styles.inputContainerMobile : styles.inputContainerWeb]}>
        <CompanyInfo />
        <InqueriesForm />
        {isTabletOrMobileDevice && <SocialMedia />}
      </View>
      {!isTabletOrMobileDevice && <ContactBottomNavbar scrollRef={scrollRef} />}
      <ContactFooter />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Blue,
  },
  containerWeb: {
    paddingHorizontal: 100,
    paddingTop: 113,
    paddingBottom: 24,
  },
  containerMobile: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 52,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.White,
    paddingBottom: 18,
  },
  inputContainerWeb: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 18,
  },
  inputContainerMobile: {
    gap: 98,
  },
});
