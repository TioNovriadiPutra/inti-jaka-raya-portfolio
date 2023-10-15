import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const HomeStartTitle = ({ mobile }) => {
  return (
    <View style={mobile ? styles.containerMobile : styles.container}>
      <Text style={[styles.title, !mobile ? styles.titleWeb : null]}>
        WELCOME TO PT INTI JAKARAYA
      </Text>
      <Text style={[styles.subTitle, !mobile ? styles.titleWeb : null]}>
        PT INTI JAKARAYA was established in 2017 located in Bandung West Java –
        Indonesia. PT INTI JAKARAYA is a Sole Distributor for UNIQUE POLYMER
        SYSTEMS Made in UK, in Indonesia.
      </Text>
    </View>
  );
};

export default HomeStartTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: 163.5,
    gap: 18,
  },
  containerMobile: {
    marginTop: 100,
    gap: 22,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 40,
    color: colors.White,
  },
  titleWeb: {
    width: 730,
  },
  subTitle: {
    fontFamily: fonts.PopRegular,
    fontSize: 20,
    color: colors.White,
  },
});
