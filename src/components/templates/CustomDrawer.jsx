import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import DrawerButton from "@components/atoms/DrawerButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "@store/navState";
import { scrollState } from "@store/scrollState";

const CustomDrawer = ({ showModal, setShowModal, scrollRef }) => {
  const nav = useRecoilValue(navState);
  const setScroll = useSetRecoilState(scrollState);

  const heightAnim = useSharedValue(0);
  const opacityAnim = useSharedValue(0);

  const heightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: heightAnim.value,
      opacity: opacityAnim.value,
    };
  });

  const handleClose = () => {
    heightAnim.value = withTiming(0, {
      duration: 800,
      easing: Easing.ease,
    });
    setTimeout(() => {
      opacityAnim.value = withTiming(0, { duration: 800 });
    }, 200);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleChangePage = (dest) => {
    handleClose();
    setScroll(0);
    nav.navigate(dest);
  };

  const handleScrollEnd = () => {
    handleClose();
    scrollRef.current.scrollToEnd({ animation: true });
  };

  useEffect(() => {
    if (showModal) {
      heightAnim.value = withTiming(270, {
        duration: 800,
        easing: Easing.ease,
      });
      setTimeout(() => {
        opacityAnim.value = withTiming(1, { duration: 800 });
      }, 200);
    }
  }, [showModal]);

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="fade"
      style={styles.modal}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={handleClose}
      >
        <Animated.View style={[styles.btnContainer, heightAnimatedStyle]}>
          <DrawerButton label="Home" onPress={() => handleChangePage("Home")} />
          <DrawerButton
            label="Newsletter"
            onPress={() => handleChangePage("Newsletter")}
          />
          <DrawerButton
            label="About"
            onPress={() => handleChangePage("About")}
          />
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
  },
});
