import React from 'react';
import { Linking, TextProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';

import { Text } from './Text';

export interface LinkProps extends NestableProps, TextProps, ThemableProps {
    url: string;
    onPress?: () => void;
}

export const Link = (props: LinkProps) => {
    const { url, subtle, theme, style, onPress, ...others } = props;

    const onPressHandler = () => {
        if (onPress) {
            onPress();
        } else {
            Linking.canOpenURL(url).then(supported => {
                if (supported) {
                    Linking.openURL(url).catch(console.log);
                } else {
                    console.log(`Don\'t know how to open URI: ${url}`);
                }
            }).catch(console.log);
        }
    };

    return (
        <Text
            {...others}
            subtle={subtle}
            theme={theme}
            variant='accent'
            style={[
                style
            ]}
            onPress={onPressHandler}
        />
    );
};
