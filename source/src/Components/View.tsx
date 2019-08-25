import React from 'react';
import { View as RCTView, ViewProps as RCTViewProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';

import { Container } from './Container';

export interface ViewProps extends RCTViewProps, NestableProps, ThemableProps {

}

export const View = (props: ViewProps) => {
    const { theme, subtle, ...others } = props;

    return (
        <Container
            {...others}
            component={RCTView}
            theme={theme}
            subtle={subtle}
        />
    );
};
