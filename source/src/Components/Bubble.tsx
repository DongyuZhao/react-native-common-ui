import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';

import { ColorVariant, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

import { Text } from './Text';

export interface BubbleProps extends ThemableProps {
    content: string;
    level: ColorVariant;
    role: 'ping' | 'pong';
    style?: StyleProp<TextStyle>;
}

export const Bubble = (props: BubbleProps) => {
    const { level, role, content, subtle, theme, style } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle[level] : config.color.main[level];

    const border = config.border.bubble;

    return (
        <View
            style={[
                border,
                config.spacing.bubble,
                {
                    alignSelf: role === 'ping' ? 'flex-end' : 'flex-start',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.surface,
                    borderColor: color.border,
                    borderBottomEndRadius: role === 'ping' ? 0 : border.borderRadius,
                    borderBottomStartRadius: role === 'pong' ? 0 : border.borderRadius,
                    shadowColor: color.shadow,
                },
                style
            ]}
        >
            <Text
                variant={level}
                theme={theme}
                subtle={subtle}
                style={[{
                    color: color.contrast,
                    backgroundColor: color.surface,
                    overflow: 'hidden',
                    alignSelf: 'center',
                }]}
            >
                {content}
            </Text>
        </View>
    );
};
