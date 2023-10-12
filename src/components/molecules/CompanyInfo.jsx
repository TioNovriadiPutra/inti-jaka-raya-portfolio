import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Info from "@components/atoms/Info";
import SocialMedia from "@components/molecules/SocialMedia";
import useResponsive from "@hooks/useResponsive";
import BlankInfo from "@components/atoms/BlankInfo";

const CompanyInfo = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View style={!isTabletOrMobileDevice && styles.container}>
      <View style={styles.infoContainer}>
        <Image source={require("@assets/images/logoSmall.png")} style={styles.logo} />
        <View style={styles.info}>
          <Info icon={require("@assets/images/address.png")} info="Jl. Indrayasa No.116, Mekarwangi, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40236" />
          <Info icon={require("@assets/images/phone.png")} info="022 428 23 264" />
          <Info icon={require("@assets/images/email.png")} info="intijakaraya.ijr@gmail.com" />
          <BlankInfo info="sales_ijr@intijakaraya.com" />
        </View>
      </View>

      {!isTabletOrMobileDevice && <SocialMedia />}
    </View>
  );
};

export default CompanyInfo;

const styles = StyleSheet.create({
  container: {
    width: 530,
    justifyContent: "space-between",
  },
  logo: {
    width: 250,
    height: 52,
  },
  infoContainer: {
    gap: 42,
  },
  info: {
    gap: 18,
  },
});
