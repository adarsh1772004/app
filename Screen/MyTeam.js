import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Styles,
} from 'react-native';
import Header from '../components/Header';
import {SliderBox} from 'react-native-image-slider-box'
class MyTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Images:[
        require("../img1.jpg"),
        require("../img2.jpg"),
        require("../img3.jpg"),
        require("../img4.jpg"),
        require("../img5.jpg"),
        
      ]
    };
  }
  GoToAnotherPage = (page) => {
    this.props.navigation.navigate('CD',{'data':"Weedingz"});
  };
  render() {
    return (
      <View>
        <Header />
        <SliderBox
        sliderBoxHeight={200}
        images={this.state.Images}
        dotColor="blue"
        inactiveDotColor="black"
        autoPlay
        circleLoop
        >

        </SliderBox>
        <View style={styling.buttonContainer}>
          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Weddingz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Birthday</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text style={styling.textS}> Baby Shower</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Retirement</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text>Encouragment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text>Anniversary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Congratulation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Festival</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.button}
            onPress={() => {
              this.GoToAnotherPage();
            }}>
            <Text> Friendship</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styling = StyleSheet.create({
  inputBox: {
    backgroundColor: 'white',
    marginTop: 30,
    width: 200,
    height: 35,
    marginLeft: 60,
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '200%',
    flexDirection: 'row',
  },
  button: {
    flexBasis: '30%',
    marginTop: 55,
    marginLeft: 5,
    borderWidth: 4,
    borderColor: 'black',
    flexDirection: 'row',
    width: 100,
    height: 150,
    justifyContent: 'center',
    borderRadius: 22,
    alignItems: 'center',
  },
  textS: {
    textAlign: 'center',
  },
});
export default MyTeam;
