import React from 'react';
import { ScrollView as RCTScrollView, ScrollViewProps as RCTScrollViewProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface ScrollViewProps extends RCTScrollViewProps, NestableProps, ThemableProps {

}

export const ScrollView = (props: ScrollViewProps) => {
    const { children, theme, subtle, style, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle['primary'] : config.color.main['primary'];

    return (
        <RCTScrollView
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
        </RCTScrollView>
    );
};
