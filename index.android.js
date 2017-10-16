import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Fields from './src/componentsAndroid/Fields'
import styles from './src/stylesAndroid/styles';

export default class AwesomeProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: [2],
      };
    }

    calcTotal() {
        var arr = this.state.value;
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }


    removeValue(index) {
        var arr = this.state.value;
        arr.splice(index, 1);
        this.setState({value: arr});
    }

    addTemplate(value) {
        console.log("You tapped the button!");
        var arr = this.state.value;
        arr.push(value);
        this.setState({value: arr});
    }

    eachValue(value, index) {
        return (
            <Fields key={index} index={index} remove={this.removeValue}>
                {value}
            </Fields>
        )
    }

  render() {
    return (
         <View style={styles.container}>


            <View style={styles.header}>
                <TouchableHighlight style={styles.button} onPress={this.addTemplate.bind(this)}>
                    <Text>Добавить</Text>
                </TouchableHighlight>

                <Text style={styles.text}>Сумма, р.</Text>
            </View>

            <View style={styles.main}>
                {this.state.value.map(this.eachValue)}
            </View>


            <View style={styles.footer}>
                <Text style={styles.text}>
                    Итого: {this.calcTotal()}
                </Text>
            </View>


         </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);