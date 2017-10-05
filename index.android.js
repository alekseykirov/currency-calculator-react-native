/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: [12,24,31],
        activity: true,
      };
    }

    onPressButton() {

    }

    save() {

    }

    calcTotal() {
        var arr = this.state.value;
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    renderActive() {
        return (
            <View style={styles.main}>
                <View style={styles.field}>
                    <TextInput style={styles.input}/>

                    <TouchableHighlight style={styles.button} onPress={this.save}>
                        <Text>Сохранить</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    renderInactive() {
        return (
            <View style={styles.main}>
                <View style={styles.field}>
                    <Text style={styles.value}>2211</Text>

                    <TouchableHighlight style={styles.button}>
                        <Text>Удалить</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

give() {
    if (this.state.activity) {
        return this.renderActive()
    } else {
        return this.renderInactive()
    }
 }

  render() {
    return (
         <View style={styles.container}>


            <View style={styles.header}>
                <TouchableHighlight style={styles.button} onPress={this.onPressButton}>
                    <Text>Добавить</Text>
                </TouchableHighlight>

                <Text style={styles.text}>Сумма, р.</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'powderblue',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    main: {
        marginBottom: 5,
    },
    footer: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: 170,
        textAlign: 'right',
        fontSize: 27,
    },
    value: {
        width: 170,
        textAlign: 'right',
        fontSize: 27,
        paddingTop: 7
    },
    button: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 16,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);