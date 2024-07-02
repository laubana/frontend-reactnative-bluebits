import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 358 / 123,
    backgroundColor: "rgba(237, 242, 247, 1)",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 358 / 123,
    borderRadius: 8,
    objectFit: "cover",
  },
});

export default styles;
