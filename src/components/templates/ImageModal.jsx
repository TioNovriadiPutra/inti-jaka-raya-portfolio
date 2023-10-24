import { Dimensions, Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalImageState, showMobileModalImageState } from "@store/productState";

const WIDTH = Dimensions.get("window").width;

const ImageModal = ({ visible }) => {
  const modalImage = useRecoilValue(modalImageState);
  const setShowModalImage = useSetRecoilState(showMobileModalImageState);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity style={styles.backdrop} onPress={() => setShowModalImage(false)}>
        <Image source={modalImage} style={styles.image} />
      </TouchableOpacity>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Backdrop,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
