import { StyleSheet, View } from "react-native";
import React from "react";
import MissionBox from "@components/atoms/MissionBox";
import useResponsive from "@hooks/useResponsive";

const MissionDescBox = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb}>
      <MissionBox index={0} icon={require("@assets/images/graph.png")} title="Mendorong Bisnis Anda" desc="Memastikan profitabilitas yang mampu mendukung pertumbuhan perusahaan" />
      <MissionBox index={1} icon={require("@assets/images/insurrance.png")} title="Menjaga Kepercayaan" desc="Membangun kepercayaan melalui kualitas, inovasi produk dan jasa" />
      <MissionBox index={3} icon={require("@assets/images/idea.png")} title="Memberi Solusi Kreatif" desc="Mendorong kompetensi kreatif untuk memenangkan persaingan" />
    </View>
  );
};

export default MissionDescBox;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 70,
  },
  containerMobile: {
    gap: 20,
  },
});
