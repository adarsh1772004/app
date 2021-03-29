import React from "react";
import { TouchableOpacity, TextInput } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
export default class DonationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allCaterers: [],
      input: "",
    };
  }

  getDetails = async () => {
    console.log("ho");
    var link =
      "https://vidhiagarwal1712.github.io/mylinkew/" +
      this.state.input +
      ".json";
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          allCaterers: responseJson,
        });
      });
  };

  render() {
    console.log(this.state.allCaterers);
    return (
      <View>
        <Header />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.inputBox}
            value={this.state.input}
            placeholder="Search Cateres"
            onChangeText={(txt) => {
              this.setState({
                input: txt,
              });
            }}
          ></TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getDetails();
            }}
          >
            <Text>Search</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <View>
              {this.state.allCaterers.length === 0 ? (
                <View style={styles.subContainer}>
                  <Text style={{ fontSize: 20 }}></Text>
                </View>
              ) : (
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <FlatList
                    data={this.state.allCaterers}
                    renderItem={({ item }) => (
                      <View style={{ borderBottomWidth: 2 }}>
                        <Text>{"Book Id: " + item.id}</Text>
                        <Text>{"Transaction Type: " + item.charges}</Text>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    marginHorizontal: 20,
    backgroundColor: "#4285F4",
    height: 30,
    width: 75,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 2,
  },

  title: {
    fontSize: 30,
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: "white",
    marginTop: 30,
    width: 200,
    height: 35,
    marginLeft: 60,
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
  },
});
