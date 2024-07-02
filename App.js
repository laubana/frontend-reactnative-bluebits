import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListView from "./screens/List/List.view";
import DetailView from "./screens/Detail/Detail.view";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name="List"
        component={ListView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailView}
        options={{
          headerBackTitleVisible: false,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
