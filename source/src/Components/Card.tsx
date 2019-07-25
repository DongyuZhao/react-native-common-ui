import React from 'react';
import { View, ViewProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface CardProps extends ThemableProps, NestableProps, ViewProps {

}

export const Card = (props: CardProps) => {
    const { theme, subtle, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle['primary'] : config.color.main['primary'];

    return (
        <View
            {...others}
            style={[
                config.spacing.card,
                config.border.card,
                {
                    backgroundColor: color.background,
                    borderColor: color.border,
                    shadowColor: color.shadow
                },
                style
            ]}
        />
    );
};
