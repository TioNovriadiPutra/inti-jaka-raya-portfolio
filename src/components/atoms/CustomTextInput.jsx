import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const CustomTextInput = ({ value, setValue, placeholder, textArea }) => {
  const handleChangeTest = (text) => {
    setValue(text);
  };

  return (
    <View style={[styles.container, textArea ? styles.textArea : styles.textNormal]}>
      <TextInput value={value} placeholder={placeholder} placeholderTextColor={colors.Placeholder} onChangeText={handleChangeTest} style={styles.input} multiline={textArea ? true : false} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  input: {
    fontFamily: fonts.PopRegular,
    fontSize: 16,
    color: colors.Black,
    outlineStyle: "none",
  },
  textArea: {
    height: 202,
    paddingVertical: 12,
  },
  textNormal: {
    height: 47,
    justifyContent: "center",
  },
});
