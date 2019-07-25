import React from 'react';
import { Text as RawText, TextProps as RawTextProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ColorVariant, FontVariant, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface TextProps extends NestableProps, RawTextProps, ThemableProps {
    variant: ColorVariant;
}

export const Text = (props: TextProps) => {
    const { variant, subtle, theme, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle[variant] : config.color.main[variant];

    const font = config.font.content[variant as FontVariant] || config.font.content['primary'];

    return (
        <RawText
            {...others}
            style={[
                font,
                {
                    color: color.content,
                    backgroundColor: color.background,
                    borderColor: color.border,
                    shadowColor: color.shadow,
                },
                style
            ]}
        />
    );
};
