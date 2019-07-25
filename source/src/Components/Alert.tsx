import React from 'react';
import { View, ViewProps } from 'react-native';

import { AlertLevel, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

import { Text } from './Text';

export interface AlertProps extends ThemableProps, ViewProps {
    content: string;
    level: AlertLevel;
}

export const Alert = (props: AlertProps) => {
    const { subtle, content, level, theme, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle[level] : config.color.main[level];

    return (
        <View
            {...others}
            style={[
                config.border.alert,
                config.spacing.alert,
                {
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.surface,
                    borderColor: color.border,
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
                    fontSize: 16,
                    lineHeight: 28.8,
                }]}
            >
                {content}
            </Text>
        </View>
    );
};
