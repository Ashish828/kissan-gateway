import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const AdminHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Administration</Text>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => Linking.openURL("http://iotclouddata.com/20log/142/")}
      >
        <Text style={styles.submitText}>View new requests</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          Linking.openURL("http://iotclouddata.com/20log/142/datalogpage.php")
        }
      >
        <Text style={styles.submitText}>Add /publish request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          Linking.openURL("http://iotclouddata.com/20log/142/datalogview.php")
        }
      >
        <Text style={styles.submitText}>Consumer view</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminHome;

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
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    elevation: 7,
  },
});
