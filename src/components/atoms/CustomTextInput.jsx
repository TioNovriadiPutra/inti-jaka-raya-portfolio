import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useController } from "react-hook-form";
import { fonts } from "@themes/fonts";

const CustomTextInput = ({
  name,
  defaultValue,
  control,
  placeholder,
  textArea,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <View
      style={[styles.container, textArea ? styles.textArea : styles.textNormal]}
    >
      <TextInput
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeText={field.onChange}
        style={styles.input}
        multiline={textArea ? true : false}
      />
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
