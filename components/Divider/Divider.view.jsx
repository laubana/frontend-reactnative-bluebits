import React from "react";
import { View } from "react-native";
import styles from "./Divider.style";

const DividerComponent = (props) => {
  const {} = props;

  return <View style={styles.container} />;
};

export default React.memo(DividerComponent);
