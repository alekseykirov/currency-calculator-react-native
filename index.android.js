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
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Fields extends Component {
    constructor(props) {
          super(props);
          this.state = {
            activity: false,
          };
        }


    remove() {
        this.props.remove(this.props.index);
    }

    renderActive() {
        return (
            <View style={styles.field}>
                <TextInput style={styles.input}/>

                <TouchableHighlight style={styles.button}>
                    <Text>Сохранить</Text>
                </TouchableHighlight>
            </View>
        )
    }

    renderInactive() {
        return (
            <View style={styles.field}>
                <Text style={styles.value}> {this.props.children} </Text>

                <TouchableHighlight style={styles.button} onPress={this.remove}>
                    <Text>Удалить</Text>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            (this.state.activity == true) ? this.renderActive() : this.renderInactive()
        )
    }
}

export default class AwesomeProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: [1],
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
//TODO доделать
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
                <TouchableHighlight style={styles.button} onPress={this.addTemplate.bind(null, 0)}>
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
//        marginBottom: 5,
    },
    footer: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
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