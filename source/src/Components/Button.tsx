import React from 'react';
import { Text } from 'react-native';

import { Touchable, TouchableProps } from '../Basics/Touchable';
import { ColorVariant, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface ButtonProps extends ThemableProps, TouchableProps {
    title: string;
    variant: ColorVariant;
    reverse: boolean;
}

export const Button = (props: ButtonProps) => {
    const { variant, title, reverse, subtle, theme, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle[variant] : config.color.main[variant];

    const font = config.font.content['button'];

    return (
        <Touchable
            {...others}
            style={[
                config.border.button,
                config.spacing.button,
                {
                    backgroundColor: reverse ? color.surface : color.background,
                    borderColor: color.border,
                    shadowColor: color.shadow,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }
            ]}
        >
            <Text
                style={[
                    font,
                    {
                        color: reverse ? color.contrast : color.content,
                        backgroundColor: 'transparent'
                    }
                ]}
            >
                {title}
            </Text>
        </Touchable>
    );
};
