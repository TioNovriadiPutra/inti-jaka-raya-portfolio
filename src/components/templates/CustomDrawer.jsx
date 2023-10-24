import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import DrawerButton from "@components/atoms/DrawerButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { navState, showDrawerState } from "@store/navState";
import { pageState, scrollState } from "@store/scrollState";
import { dataNewsLetter } from "@utils/constant/newsletterData";
import { productPositionState } from "@store/productState";

const CustomDrawer = ({ scrollRef }) => {
  const nav = useRecoilValue(navState);
  const setScroll = useSetRecoilState(scrollState);
  const productPosition = useRecoilValue(productPositionState);
  const [showDrawer, setShowDrawer] = useRecoilState(showDrawerState);
  const page = useRecoilValue(pageState);

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
    handleClose();
    setScroll(0);
    nav.navigate(dest);
  };

  const handleScrollEnd = () => {
    handleClose();
    scrollRef.current.scrollToEnd({ animated: true });
  };

  const handleScrollToProduct = () => {
    handleClose();
    scrollRef.current.scrollTo({ x: 0, y: productPosition - 80 });
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
          <DrawerButton label="Home" onPress={() => handleChangePage("Home")} />
          <DrawerButton label="About" onPress={() => handleChangePage("About")} />
          {page === "Home" && <DrawerButton label="Product" onPress={handleScrollToProduct} />}

          {dataNewsLetter[0].image && <DrawerButton label="Newsletter" onPress={() => handleChangePage("Newsletter")} />}
          <DrawerButton label="Contact" onPress={handleScrollEnd} />
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
