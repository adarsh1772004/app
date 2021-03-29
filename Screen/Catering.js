import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Header, Icon } from "react-native-elements";

export default class BookDonateScreen extends React.Component {
  constructor(props) {
    super(props);
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
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              color="black"
              onPress={() => {
                console.log("Arrow")
                this.props.navigation.goBack();
              }}
            ></Icon>
          }
          centerComponent={{
            text: "PYP",
            style: { color: "black", fontSize: 27, fontWeight: "bold" },
          }}
        ></Header>
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
          <Text> Catering</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          {this.state.allCaterers.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Books</Text>
            </View>
          ) : (
            /*  <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allCaterers}
              renderItem={this.renderItem}
            ></FlatList> */
            <FlatList
              data={this.state.allCaterers}
              renderItem={({ item }) => (
                <View style={{ borderBottomWidth: 2 }}>
                  <Text>{"Book Id: " + item.id}</Text>
                  <Text>{"Student id: " + item.name}</Text>
                  <Text>{"Transaction Type: " + item.charges}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
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
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
