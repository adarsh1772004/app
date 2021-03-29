import * as React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import {ListItem} from 'react-native-elements'
import Header from "../components/Header";

class Catering extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      fetchedData: [],
    };
  }
  getDetails = async () => {
    console.log("ho")
    var link = "http://localhost:3000/" + this.state.input;
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          fetchedData: responseJson,
        });
      });
  };
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, i }) => {
console.log(item.name)   
 return (
      <ListItem
        key={i}
        title={item.name}
        subtitle={item.charges}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity
            style={styling.button}
            
          >
            <Text style={{ color: "#ffff" }}>Book</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render() {
    console.log(this.state.fetchedData);
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ justifyContent: "center"  , alignItems:"center" }}>
          <TextInput
            style={styling.inputBox}
            value={this.state.input}
            placeholder="Search Cateres"
            onChangeText={(txt) => {
              this.setState({
                input: txt,
              });
            }}
          ></TextInput>

          <TouchableOpacity style={styling.button} onPress={() => { this.getDetails()}}>
            <Text> Catering</Text>
          </TouchableOpacity>
        </View>
        {this.state.fetchedData.map((item)=>{
            return (
                <Text> {item.name}</Text>
            )
        })}
      </View>
    );
  }
}
const styling = StyleSheet.create({
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
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
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
    marginRight: 50,
  },
});
export default Catering;
