import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/home-bg-2.jpg")}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Login as</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.submitText}>Continue as admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            Linking.openURL("http://iotclouddata.com/20log/142/datalogview.php")
          }
        >
          <Text style={styles.submitText}>Continue as consumer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: "10%",
  },
  imageContainer: {
    height: "60%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    padding: "2.5%",
  },
  header: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    marginBottom: "5%",
  },
  submitButton: {
    backgroundColor: "#2ed573",
    borderRadius: 6,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 15,
    marginBottom: "5%",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins_500Medium",
    elevation: 7,
  },
});
