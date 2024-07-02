import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  titleWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  adWrapper: {},
  labelWrapper: {
    backgroundColor: "rgba(234, 84, 85, 0.15)",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  detailWrapper: {
    gap: 16,
  },
  detailHeader: {
    gap: 8,
  },
  detailBody: {
    flexDirection: "row",
    gap: 16,
  },
  delieverImage: {
    aspectRatio: 1,
    width: 64,
  },
  deliverInfoWrapper: {
    flex: 1,
    gap: 4,
    justifyContent: "center",
  },
  DetailFooter: {
    flexDirection: "row",
    gap: 48,
  },
  detailFooterContent: {
    gap: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(77, 129, 231, 1)",
    borderRadius: 69,
    padding: 16,
  },
});

export default styles;
