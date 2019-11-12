import React, {Component} from "react";
import {Image, Text, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import { increment, increment_other } from '../../actions';
import { AsyncStorage } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    AsyncStorage.clear();
  }

  render() {
    const navigation = this.props.navigation;
    const increment = this.props.increment;
    const increment_other = this.props.increment_other;
    const i = this.props.i;
    const other = this.props.other;

    return (
      <View style={{flex:1, padding: 50}}>
        <Button onPress={() => {increment(); navigation.navigate('NotHome')}} title="You are at home" />
        <Text>i: {i}</Text>
        <Button onPress={() => {increment_other();}} title="Just increment" />
        <Text>other: {other}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      i: state.i,
      other: state.other,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
      increment_other: () => dispatch(increment_other()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
