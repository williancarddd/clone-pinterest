import { theme } from "@//theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25
  },
  selected: {
    borderWidth: 8,
    borderBlockColor: theme.colors.white
  }
});