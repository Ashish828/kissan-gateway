import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as sb,
} from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import AdminHome from "./screens/AdminHome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7bed9f" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminHome"
            component={AdminHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? sb.currentHeight : 0, //if in ios the safe area will work but in android we are adding dynamic padding on the top
  },
});
