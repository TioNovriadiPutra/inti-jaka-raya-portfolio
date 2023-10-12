import { StyleSheet, View } from "react-native";
import React from "react";
import LoadMoreButton from "@components/atoms/LoadMoreButton";

const LoadMore = () => {
  return (
    <View style={styles.container}>
      <LoadMoreButton />
    </View>
  );
};

export default LoadMore;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
