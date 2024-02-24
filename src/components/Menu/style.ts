import { theme } from "@//theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray['800'],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: theme.colors.gray['800'],
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    color: theme.colors.white,
    textAlign: 'center',
    flex: 1,
    marginRight: 24
  },
  close: {
    color: theme.colors.white
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
    marginBottom: 12
  }
});