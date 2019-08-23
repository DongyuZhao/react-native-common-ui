import React from 'react';
import { View as RCTView, ViewProps as RCTViewProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface ViewProps extends RCTViewProps, NestableProps, ThemableProps {

}

export const View = (props: ViewProps) => {
    const { children, theme, subtle, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle['primary'] : config.color.main['primary'];

    return (
        <RCTView
            {...others}
            style={[
                config.border.container,
                config.spacing.container,
                {
                    backgroundColor: color.background,
                    borderColor: color.border,
                    shadowColor: color.shadow,
                },
                style
            ]}
        >
            {children}
        </RCTView>
    );
};
