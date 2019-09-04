// tslint:disable: max-line-length
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { CheckBoxProps, CheckMarkProps } from '../Common/Checkable';

const Checked = (props: CheckMarkProps) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            style={props.style}
            viewBox='0 0 24 24'
        >
            <Path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill={props.color} />
        </Svg>
    );
};

const Unchecked = (props: CheckMarkProps) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            style={props.style}
            viewBox='0 0 24 24'
        >
            <Path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' fill={props.color} />
        </Svg>
    );
};

const Intermediate = (props: CheckMarkProps) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            style={props.style}
            viewBox='0 0 24 24'
        >
            <Path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z' fill={props.color} />
        </Svg>
    );
};

export const CheckBox = (props: CheckBoxProps) => {
    const { checked, ...others } = props;
    if (checked === undefined) {
        return <Intermediate {...others} />;
    }

    return checked ? <Checked {...others} /> : <Unchecked {...others} />;
};
