import React, { useEffect, useState } from 'react';
import { ImageResizeMode, ImageSourcePropType, LayoutChangeEvent, StyleSheet, View, ViewProps } from 'react-native';
import { isSvg } from 'react-native-svg-component';

import { ImageUtils } from '../Utils/Image';

import { Image } from './Image';

export interface BackgroundProps extends ViewProps {
    source: ImageSourcePropType;
    fill: 'stretch' | 'contain' | 'cover' | 'stretch' | 'repeat' | 'center' | 'horizontal' | 'vertical';
    children?: React.ReactNode;
}

interface BackgroundState {
    resize: ImageResizeMode;
    containerRatio: number;
}

export const Background = (props: BackgroundProps) => {
    const [state, setState] = useState({
        resize: 'cover',
        containerRatio: 1,
    } as BackgroundState);

    const { children, source, fill, onLayout, ...others } = props;

    const onContainerSize = (event: LayoutChangeEvent) => {
        if (onLayout) {
            onLayout(event);
        }
        if (event.nativeEvent.layout.width > 0 && event.nativeEvent.layout.height > 0) {
            setState({ ...state, containerRatio: event.nativeEvent.layout.width / event.nativeEvent.layout.height });
        }
    };

    const onSizeFetched = (width: number, height: number) => {
        if (width > 0 && height > 0) {
            const ratio = width / height;
            if (fill === 'horizontal') {
                if (ratio > state.containerRatio) {
                    setState({ ...state, resize: 'cover' });
                } else {
                    setState({ ...state, resize: 'contain' });
                }
            } else if (fill === 'vertical') {
                if (ratio < state.containerRatio) {
                    setState({ ...state, resize: 'cover' });
                } else {
                    setState({ ...state, resize: 'contain' });
                }
            } else {
                setState({ ...state, resize: fill });
            }
        }
    };

    const onSizeError = (error: any) => {
        console.log(`Fetch size failed. Error:${error}`);
    };

    useEffect(() => {
        const uri = (props.source as any).uri as string;
        if (!isSvg(uri) || fill === 'horizontal' || fill === 'vertical') {
            ImageUtils.fetchSize(uri, onSizeFetched, onSizeError);
        } else {
            setState({ ...state, resize: fill });
        }
    }, [props.source, props.fill]);

    return (
        <View
            {...others}
            onLayout={onContainerSize}
        >
            <Image
                source={source}
                alt='background'
                style={StyleSheet.absoluteFill}
                resizeMode={state.resize}
            />
            {children}
        </View>
    );
};
