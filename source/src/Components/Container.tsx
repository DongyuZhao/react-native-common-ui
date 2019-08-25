import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export type ContainerProps<P = {}> = P & NestableProps & ThemableProps & {
    component: React.ComponentClass<P, any>;
    style?: StyleProp<ViewStyle>;
};

export function Container<P>(props: ContainerProps<P>) {
    const { component, theme, subtle, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle['primary'] : config.color.main['primary'];

    return React.createElement(
        component,
        {
            ...others,
            style: [
                    config.border.container,
                    config.spacing.container,
                    {
                        color: color.content,
                        backgroundColor: color.background,
                        borderColor: color.border,
                        shadowColor: color.shadow,
                    },
                    (props as any).style
            ]
        } as any
    );
}
