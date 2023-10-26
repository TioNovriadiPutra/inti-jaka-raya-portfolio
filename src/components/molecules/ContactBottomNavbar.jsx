import { StyleSheet, View } from "react-native";
import React from "react";
import BottomNavbarButton from "@components/atoms/BottomNavbarButton";
import { useRecoilValue } from "recoil";
import { pageState } from "@store/scrollState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import { useTranslation } from "react-i18next";
import { productLayoutState } from "@store/sectionState";

const ContactBottomNavbar = ({ scrollRef }) => {
  const page = useRecoilValue(pageState);
  const productLayout = useRecoilValue(productLayoutState);

  const { t } = useTranslation();

  const customPress = () => {
    scrollRef.current.scrollTo({ animated: true, y: productLayout - 80 });
  };

  return (
    <View style={styles.container}>
      <BottomNavbarButton label={t("navbarHome")} />
      <BottomNavbarButton label={t("navbarAbout")} />
      {page === "Home" && <BottomNavbarButton label={t("navbarProduct")} customPress={customPress} />}
      {dataNewsLetter[0].image && <BottomNavbarButton label={t("navbarNewsletter")} />}
    </View>
  );
};

export default ContactBottomNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginTop: 18,
  },
});
