import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../stylesAndroid/styles';

export default class Fields extends Component {
    constructor(props) {
          super(props);
          this.state = {
            activity: false,
          };
        }


    remove() {
        console.log('Done')
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

                <TouchableHighlight style={styles.button} onPress={this.remove.bind(this)}>
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