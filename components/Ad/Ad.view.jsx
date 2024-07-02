import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Ad.style";

const AdComponent = (props) => {
  const { imageUrl } = props;

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={imageUrl} />
      ) : (
        <Text
          style={{
            color: "rgba(168, 186, 204, 1)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Ad Space
        </Text>
      )}
    </View>
  );
};

export default React.memo(AdComponent);
