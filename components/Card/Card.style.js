import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "rgba(245, 245, 245, 1)",
    borderRadius: 4,
    borderWidth: 1,
    cursor: "pointer",
    flexDirection: "row",
    gap: 16,
    padding: 16,
  },
  image: {
    aspectRatio: 1,
    width: 24,
  },
  textWrapper: {
    flex: 1,
    gap: 8,
  },
});

export default styles;
