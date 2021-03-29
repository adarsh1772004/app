import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';

class Viedo extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text></Text>
      </View>
    );
  }
}
const styling = StyleSheet.create({
  button: {
    marginTop: 70,
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
  },
});
export default Viedo;
