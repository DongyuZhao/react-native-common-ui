import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FlexImage } from 'react-native-common-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const instructions = Platform.select({
    ios:
        `Press Cmd+R to reload,
  Cmd+D or shake for dev menu`,
    android:
        `Double tap R on your keyboard to reload,
    'Shake or press menu button for dev menu'`
});

// tslint:disable: max-line-length
// tslint:disable: quotemark
// tslint:disable: no-magic-numbers
export class App extends Component {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <FlexImage
                    source={{ uri: "https://www.bing.com/th?id=OHR.BailysBeads_ROW6229832412_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" }}
                    alt='image'
                    width={100}
                    height={100}
                    fill='contain'
                    onPress={() => {
                        console.log('clicked');
                    }}
                />
            </View>
        );
    }
}
