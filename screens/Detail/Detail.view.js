import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./Detail.style";
import Ad from "../../components/Ad";
import Divider from "../../components/Divider";
import Card from "../../components/Card";

const DetailView = (props) => {
  const {} = props;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ gap: 24, padding: 16 }}
    >
      <View style={styles.titleWrapper}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Delivery# 487303</Text>
        <View style={styles.labelWrapper}>
          <Text
            style={{
              color: "rgba(234, 84, 85, 1)",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Pending
          </Text>
        </View>
      </View>
      <View style={styles.adWrapper}>
        <Ad />
      </View>
      <Divider />
      <View style={styles.detailWrapper}>
        <View style={styles.detailHeader}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            Delivery Details
          </Text>
          <Text style={{ color: "rgba(147, 151, 165, 1)", fontSize: 12 }}>
            Delivery time: 2023-10-17 17:05:54
          </Text>
        </View>
        <View style={styles.detailBody}>
          <Image
            source={require("../../assets/fedex.png")}
            style={styles.delieverImage}
          />
          <View style={styles.deliverInfoWrapper}>
            <Text style={{ fontSize: 14, fontWeight: 500 }}>
              Delivery from Fedex
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400 }}>
              Bluebits Office Metrotown
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400 }}>
              4289 Kingsway, Burnaby, BC, Canada, V6B0C8
            </Text>
          </View>
        </View>
        <View style={styles.DetailFooter}>
          <View style={styles.detailFooterContent}>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Pick-up Code</Text>
            <Text
              style={{
                color: "rgba(77, 129, 231, 1)",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              288-234-123
            </Text>
          </View>
          <View style={styles.detailFooterContent}>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>Compartment</Text>
            <Text
              style={{
                color: "rgba(77, 129, 231, 1)",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              104
            </Text>
          </View>
        </View>
        <Pressable>
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>
              Unlock Compartment
            </Text>
          </View>
        </Pressable>
        <Divider />
      </View>
      <Card
        content="Register your unit with BlueBox to enable delivery by unit feature."
        image={require("../../assets/unit.png")}
        title="Residential Unit Registration."
      />
      <Card
        content="Submit a support ticket form to us."
        image={require("../../assets/create.png")}
        title="Create a support ticket."
      />
    </ScrollView>
  );
};

export default DetailView;
