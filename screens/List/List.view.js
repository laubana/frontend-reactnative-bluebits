import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./List.style";
import { useNavigation } from "@react-navigation/native";

const ListView = (props) => {
  const {} = props;

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: "white" }}>Enter</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default ListView;
