import { StyleSheet, View } from "react-native";
import React from "react";
import NavbarButton from "@components/atoms/NavbarButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import { pageState, scrollState } from "@store/scrollState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import { productPositionState } from "@store/productState";
import { useTranslation } from "react-i18next";

const NavbarButtonSection = ({ white, withBorder, withBackground, scrollRef }) => {
  const nav = useRecoilValue(navState);
  const page = useRecoilValue(pageState);
  const setScroll = useSetRecoilState(scrollState);
  const productPosition = useRecoilValue(productPositionState);

  const { t } = useTranslation();

  const handleChangePage = (dest) => {
    setScroll(0);
    nav.navigate(dest);
  };

  const handlePress = (dest) => {
    if (page === dest) {
      scrollRef.current.scrollTo({ animated: true, x: 0, y: 0 });
    } else {
      handleChangePage(dest);
    }
  };

  const handleScrollEnd = () => {
    scrollRef.current.scrollToEnd({ animation: true });
  };

  const handleScrollToProduct = () => {
    scrollRef.current.scrollTo({ x: 0, y: productPosition - 80 });
  };

  return (
    <View style={styles.btnContainer}>
      <NavbarButton label={t("navbarHome")} white={white} onPress={() => handlePress("Home")} />
      <NavbarButton label={t("navbarAbout")} white={white} onPress={() => handlePress("About")} />
      {page === "Home" && <NavbarButton label={t("navbarProduct")} white={white} onPress={handleScrollToProduct} />}
      {dataNewsLetter[0].image && <NavbarButton label={t("navbarNewsletter")} white={white} onPress={() => handlePress("Newsletter")} />}
      <NavbarButton label={t("navbarContact")} white withBorder={withBorder} withBackground={withBackground} onPress={handleScrollEnd} />
    </View>
  );
};

export default NavbarButtonSection;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
  },
});
