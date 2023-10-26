import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import DrawerButton from "@components/atoms/DrawerButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { navState, showDrawerState } from "@store/navState";
import { pageState, scrollState } from "@store/scrollState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import { productLayoutState } from "@store/sectionState";
import { useTranslation } from "react-i18next";

const CustomDrawer = ({ scrollRef }) => {
  const nav = useRecoilValue(navState);
  const setScroll = useSetRecoilState(scrollState);
  const [showDrawer, setShowDrawer] = useRecoilState(showDrawerState);
  const page = useRecoilValue(pageState);
  const productLayout = useRecoilValue(productLayoutState);

  const { t } = useTranslation();

  const heightAnim = useSharedValue(0);

  const heightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: heightAnim.value,
    };
  });

  const handleClose = () => {
    setShowDrawer(false);
    heightAnim.value = 0;
  };

  const handleChangePage = (dest) => {
    setScroll(0);
    nav.navigate(dest);
  };

  const handleScrollEnd = () => {
    handleClose();
    scrollRef.current.scrollToEnd({ animated: true });
  };

  const handleScrollToProduct = () => {
    handleClose();
    scrollRef.current.scrollTo({ x: 0, y: productLayout - 80 });
  };

  const handlePress = (dest) => {
    handleClose();

    if (page === dest) {
      scrollRef.current.scrollTo({ animated: true, x: 0, y: 0 });
    } else {
      handleChangePage(dest);
    }
  };

  useEffect(() => {
    if (showDrawer) {
      heightAnim.value = withTiming(270, {
        duration: 800,
        easing: Easing.ease,
      });
    }
  }, [showDrawer]);

  return (
    <Modal transparent visible={showDrawer} animationType="fade" style={styles.modal}>
      <TouchableOpacity style={styles.container} activeOpacity={1} onPress={handleClose}>
        <Animated.View style={[styles.btnContainer, heightAnimatedStyle]}>
          <DrawerButton label={t("navbarHome")} onPress={() => handlePress("Home")} />
          <DrawerButton label={t("navbarAbout")} onPress={() => handlePress("About")} />
          {page === "Home" && <DrawerButton label={t("navbarProduct")} onPress={handleScrollToProduct} />}
          {dataNewsLetter[0].image && <DrawerButton label={t("navbarNewsletter")} onPress={() => handlePress("Newsletter")} />}
          <DrawerButton label={t("navbarContact")} onPress={handleScrollEnd} />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  modal: {
    marginTop: 62,
  },
  container: {
    flex: 1,
    backgroundColor: colors.Modal,
    marginTop: 62,
  },
  btnContainer: {
    backgroundColor: colors.White,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingTop: 24,
    paddingBottom: 39,
    gap: 32,
    borderWidth: 1,
    borderColor: colors.DrawerBorder,
    overflow: "hidden",
  },
});
