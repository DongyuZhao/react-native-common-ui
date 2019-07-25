import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { ColorVariant, FontVariant, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

import { Text } from './Text';

export interface BadgeProps extends ThemableProps {
    level: ColorVariant;
    variant: 'pill' | 'normal';
    content: string;
    style?: StyleProp<TextStyle>;
}

export const Badge = (props: BadgeProps) => {
    const { subtle, content, variant, level, theme, style } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle[level] : config.color.main[level];

    const font = config.font.content[level as FontVariant] || config.font.content['primary'];

    return (
        <Text
            variant={level}
            theme={theme}
            subtle={subtle}
            style={[
                config.border.badge,
                config.spacing.badge,
                {
                    color: color.contrast,
                    backgroundColor: color.surface,
                    overflow: 'hidden',
                    borderRadius: variant === 'pill' ? font.lineHeight / 2 : config.border.badge.borderRadius,
                    alignSelf: 'center',
                },
                style
            ]}
        >
            {content}
        </Text>
    );
};
