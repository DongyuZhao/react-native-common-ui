import React from 'react';
import { TextProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps, TitleConfig } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

import { Text } from './Text';

export interface SubtitleProps extends NestableProps, TextProps, ThemableProps {
    level: keyof TitleConfig;
}

export const Subtitle = (props: SubtitleProps) => {
    const { level, subtle, theme, style, ...others } = props;

    const config = useTheme(theme);

    return (
        <Text
            {...others}
            variant='secondary'
            subtle={subtle}
            theme={theme}
            style={[
                config.font.header.subtitle[level],
                style
            ]}
        />
    );
};
