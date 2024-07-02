import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Card.style";

const CardComponent = (props) => {
  const { content, image, title } = props;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={{ fontSize: 14, fontWeight: 600 }}>{title}</Text>
        <Text style={{ color: "rgba(147, 151, 165, 1)", fontSize: 12 }}>
          {content}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(CardComponent);
