import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Alert, Badge, Button, Card, Header, Link, name, Text } from 'react-native-common-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
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

// tslint:disable-next-line: interface-name
interface State {
    theme: string;
}

// tslint:disable: max-line-length
// tslint:disable: quotemark
// tslint:disable: no-magic-numbers
export class App extends Component<any, State> {
    public constructor(props: any) {
        super(props);

        this.state = {
            theme: 'light'
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Card theme={this.state.theme} subtle={false}>
                    <Alert subtle={false} content={'This is an alert.'} level={'good'} theme={this.state.theme} />
                    <Header level={1} subtle={false} theme={this.state.theme}>Sample</Header>
                    <Text style={styles.welcome} subtle={false} variant={'primary'} theme={this.state.theme}>
                        Welcome to {name}!
                    </Text>
                    <Text style={styles.instructions} subtle={false} variant={'danger'} theme={this.state.theme}>To get started, edit App.js</Text>
                    <Text style={styles.instructions} subtle={false} variant={'mark'} theme={this.state.theme}>{instructions}</Text>
                    <Text subtle={false} variant={'primary'} theme={this.state.theme}>
                        The repo is host on <Link url={'https://github.com/DongyuZhao/react-native-common-ui'} subtle={false} style={styles.instructions} theme={this.state.theme}>GitHub</Link>
                    </Text>
                    <Badge level='good' variant='pill' content='MSFT' theme={this.state.theme} subtle={false} />
                    <Badge level='warn' variant='normal' content='MSFT' theme={this.state.theme} subtle={false} />
                    <Button title='LIGHT THEME' variant='accent' reverse={false} theme={this.state.theme} subtle={false} onPress={this.onChangeToLight} />
                    <Button title='DARK THEME' variant='accent' reverse={true} theme={this.state.theme} subtle={false} onPress={this.onChangeToDark} />
                </Card>
            </View>
        );
    }

    private readonly onChangeToLight = () => {
        this.setState({
            theme: 'light'
        });
    }

    private readonly onChangeToDark = () => {
        this.setState({
            theme: 'dark'
        });
    }
}
