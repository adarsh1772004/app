import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Styles,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import firebase from 'firebase';
import db from '../Config'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  userLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        this.props.navigation.navigate('AppNav')
      })
      .catch((error) => {
        var m = error.message;
        Alert.alert(m);
      });
  };
  render() {
    return (
      <View>
        <Header />
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          keyboardType="email-address"
          placeholder="Enter the Email"
          onChangeText={(txt) => {
            this.setState({
              email: txt,
            });
          }}></TextInput>
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          placeholder="Enter The Password"
          onChangeText={(txt) => {
            this.setState({
              password: txt,
            });
          }}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userLogin();
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  button: {
    backgroundColor: 'green',
    margin: 50,
    width: 100,
    marginLeft: 120,
    alignItems: 'center',
    borderWidth: 3,
  },
  inputBox: {
    backgroundColor: 'white',
    marginTop: 30,
    width: 200,
    marginLeft: 70,
    borderWidth: 5,
    textAlign: 'center',
  },
});
