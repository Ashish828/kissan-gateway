import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const submitLogin = async () => {
    setIsSubmitting(true);

    if (email != "" || password != "") {
      const response = await axios.post(
        "https://kissan-gateway.herokuapp.com/user/signin",
        {
          email,
          password,
        }
      );

      if (response.data.status == "FAILED") {
        setErrorMessage(response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 2500);
      } else if (response.data.status == "SUCCESS") {
        navigation.navigate("AdminHome");
      } else {
        setErrorMessage("something went wrong!!! try again..");
        setTimeout(() => {
          setErrorMessage("");
        }, 2500);
      }
    } else {
      setTimeout(() => {
        setErrorMessage("Empty Fields!!!");
      }, 2500);
    }

    setIsSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login as admin</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={onChangeEmail}
        value={email}
        autoCapitalize="none"
        placeholder={"email or username"}
      />
      <TextInput
        style={styles.inputContainer}
        onChangeText={onChangePassword}
        value={password}
        autoCapitalize="none"
        placeholder={"password"}
        secureTextEntry={true}
      />

      {!isSubmitting && (
        <TouchableOpacity style={styles.submitButton} onPress={submitLogin}>
          <Text style={styles.submitText}>Continue</Text>
        </TouchableOpacity>
      )}
      {isSubmitting && (
        <TouchableOpacity style={styles.submitButton} disabled={true}>
          <ActivityIndicator size={"large"} color="white" />
        </TouchableOpacity>
      )}

      <Text style={styles.errorMssg}>{errorMessage}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 35,
    fontFamily: "Poppins_500Medium",
    marginBottom: "5%",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#DFDFDF",
    borderRadius: 6,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: "#2ed573",
    borderRadius: 6,
    width: "85%",
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
  errorMssg: {
    color: "salmon",
    textAlign: "center",
    marginBottom: "2.5%",
    fontFamily: "Poppins_500Medium",
  },
});
