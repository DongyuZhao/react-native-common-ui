import React from 'react';
import { LayoutChangeEvent, Platform, ScrollView, StyleSheet } from 'react-native';
import {
    Alert,
    Avatar,
    Badge,
    Bubble,
    Button,
    Card,
    Container,
    FlexImage,
    Header,
    Link,
    Modal,
    name,
    Switch,
    Text,
    ThemeContext
} from 'react-native-common-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

interface State {
    theme: string;
    modal: boolean;
    checkbox: boolean;
    width: number;
    height: number;
}

// tslint:disable: max-line-length
export class App extends React.Component<any, State> {
    public constructor(props: any) {
        super(props);

        this.state = {
            theme: 'light',
            modal: false,
            checkbox: false,
            width: 0,
            height: 0,
        };
    }

    public render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Modal
                    visible={this.state.modal}
                    animationType='fade'
                    onBackgroundPress={this.hideModal}
                    transparent={true}
                >
                    <Header level={4} subtle={false}>Modal</Header>
                    <Text style={styles.welcome} subtle={false} variant='primary'>
                        Welcome to {name}!
                    </Text>
                    <Text style={styles.instructions} subtle={false} variant='danger'>To get started, edit App.js</Text>
                    <Text style={styles.instructions} subtle={false} variant='mark'>{instructions}</Text>
                    <Text subtle={false} variant='primary'>
                        The repo is host on <Link url='https://github.com/DongyuZhao/react-native-common-ui' subtle={false} style={styles.instructions}>GitHub</Link>
                    </Text>
                </Modal>
                <Container component={ScrollView} subtle={false} contentContainerStyle={styles.container}>
                    <Card subtle={false} onLayout={this.onLayout} style={{ width: '95%' }}>
                        <Alert subtle={false} content='This is an alert.' level='good' />
                        <Header level={1} subtle={false}>Sample</Header>
                        <Text style={styles.welcome} subtle={false} variant='primary'>
                            Welcome to {name}!
                            </Text>
                        <Text style={styles.instructions} subtle={false} variant='danger'>To get started, edit App.js</Text>
                        <Text style={styles.instructions} subtle={false} variant='mark'>{instructions}</Text>
                        <Text subtle={false} variant='primary'>
                            The repo is host on <Link url='https://github.com/DongyuZhao/react-native-common-ui' subtle={false} style={styles.instructions}>GitHub</Link>
                        </Text>
                        <Avatar source={{ uri: 'https://avatars2.githubusercontent.com/u/8455725?s=88&v=4' }} fill='auto' width={48} height={48} alt='test' />
                        <FlexImage
                            source={{ uri: 'https://www.bing.com/th?id=OHR.RamsauWimbachklamm_JA-JP2537848550_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp' }}
                            fill='horizontal'
                            width={this.state.width}
                            height={this.state.height}
                            alt='test'
                        />
                        <FlexImage
                            source={{ uri: 'https://www.bing.com/th?id=OHR.Vessel_JA-JP2364863537_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4' }}
                            fill='horizontal'
                            width={this.state.width}
                            height={this.state.height}
                            alt='test'
                        />
                        <Badge level='good' variant='pill' content='MSFT' subtle={false} />
                        <Badge level='warn' variant='normal' content='MSFT' subtle={false} />
                        <Bubble content='Ping' level='good' role='ping' subtle={false} />
                        <Bubble content='Pong' level='info' role='pong' subtle={false} />
                        <Button title='LIGHT THEME' variant='accent' reverse={false} subtle={false} onPress={this.onChangeToLight} />
                        <Button title='DARK THEME' variant='accent' reverse={true} subtle={false} onPress={this.onChangeToDark} />
                        <Button title='Modal' variant='warn' reverse={true} subtle={false} onPress={this.showModal} />
                        <Switch type='checkbox' variant='accent' onSwitch={this.onToggleCheckBox} value={this.state.checkbox} subtle={false}>
                            <Text subtle={false} variant='primary'>
                                CheckBox
                            </Text>
                        </Switch>
                        <Switch type='radio' variant='accent' onSwitch={this.onToggleCheckBox} value={this.state.checkbox} subtle={false}>
                            <Text subtle={false} variant='primary'>
                                Radio
                            </Text>
                        </Switch>
                        <Switch type='toggle' variant='accent' onSwitch={this.onToggleCheckBox} value={this.state.checkbox} subtle={false}>
                            <Text subtle={false} variant='primary'>
                                Toggle
                            </Text>
                        </Switch>
                    </Card>
                </Container>
            </ThemeContext.Provider>
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

    private readonly onToggleCheckBox = () => {
        this.setState({
            checkbox: !this.state.checkbox
        });
    }

    private readonly onLayout = (event: LayoutChangeEvent) => {
        this.setState({
            width: event.nativeEvent.layout.width - 16,
            height: event.nativeEvent.layout.height
        });
    }

    private readonly showModal = () => {
        this.setState({
            modal: true
        });
    }

    private readonly hideModal = () => {
        this.setState({
            modal: false
        });
    }
}
