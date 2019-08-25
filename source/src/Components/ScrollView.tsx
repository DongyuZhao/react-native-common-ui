import React from 'react';
import { ScrollView as RCTScrollView, ScrollViewProps as RCTScrollViewProps } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';

import { Container } from './Container';

export interface ScrollViewProps extends RCTScrollViewProps, NestableProps, ThemableProps {

}

export const ScrollView = (props: ScrollViewProps) => {
    const { theme, subtle, ...others } = props;

    return (
        <Container
            {...others}
            component={RCTScrollView}
            theme={theme}
            subtle={subtle}
        />
    );
};
