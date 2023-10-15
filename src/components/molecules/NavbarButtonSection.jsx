import { StyleSheet, View } from "react-native";
import React from "react";
import NavbarButton from "@components/atoms/NavbarButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import { scrollState } from "@store/scrollState";
import { dataNewsLetter } from "@utils/constant/newsletterData";

const NavbarButtonSection = ({
  white,
  withBorder,
  withBackground,
  scrollRef,
}) => {
  const nav = useRecoilValue(navState);
  const setScroll = useSetRecoilState(scrollState);

  const handleChangePage = (dest) => {
    setScroll(0);
    nav.navigate(dest);
  };

  const handleScrollEnd = () => {
    scrollRef.current.scrollToEnd({ animation: true });
  };

  return (
    <View style={styles.btnContainer}>
      <NavbarButton
        label="Home"
        white={white}
        onPress={() => handleChangePage("Home")}
      />
      <NavbarButton
        label="About"
        white={white}
        onPress={() => handleChangePage("About")}
      />
      {dataNewsLetter[0].image && (
        <NavbarButton
          label="Newsletter"
          white={white}
          onPress={() => handleChangePage("Newsletter")}
        />
      )}
      <NavbarButton
        label="Contact"
        white
        withBorder={withBorder}
        withBackground={withBackground}
        onPress={handleScrollEnd}
      />
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
