import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { isSvg } from 'react-native-svg-component';

import { ImageUtils } from '../Utils/Image';

import { Image, ImageProps } from './Image';
import { Touchable } from './Touchable';

export type ImageFillOptions = 'stretch' | 'contain' | 'cover' | 'stretch' | 'repeat' | 'center' | 'horizontal' | 'vertical';

export interface FlexImageProps extends ImageProps {
    fill: ImageFillOptions;
    onPress?: () => void;
    width: number;
    height: number;
}

export const FlexImage = (props: FlexImageProps) => {
    const [state, setState] = useState({
        width: 0,
        height: 0,
        loaded: false,
    });

    const onSizeFetched = (width: number, height: number) => {
        if (width > 0 && height > 0 && props.width > 0 && props.height > 0) {
            const ratio = width / height;
            if (props.fill === 'horizontal') {
                setState({
                    width: props.width,
                    height: props.width / ratio,
                    loaded: true
                });
            } else if (props.fill === 'vertical') {
                setState({
                    width: props.height * ratio,
                    height: props.height,
                    loaded: true
                });
            } else {
                setState({
                    width: props.width,
                    height: props.height,
                    loaded: true
                });
            }
        }
    };

    const onSizeError = (error: any) => {
        console.log(`Fetch size failed. Error:${error}`);
    };

    useEffect(() => {
        const uri = (props.source as any).uri as string;
        if (!isSvg(uri) && (props.fill === 'horizontal' || props.fill === 'vertical')) {
            ImageUtils.fetchSize(uri, onSizeFetched, onSizeError);
        } else {
            onSizeFetched(props.width, props.height);
        }
    }, [props.source, props.width, props.height, props.fill]);

    const { width, height, onPress, fill, ...others } = props;

    if (state.loaded) {
        return (
            <Touchable
                style={{
                    width: width,
                    height: height,
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onPress}
            >
                <Image
                    {...others}
                    width={state.width}
                    height={state.height}
                    resizeMode={fill === 'horizontal' || fill === 'vertical' ? undefined : fill}
                />
            </Touchable>
        );
    } else {
        return (
            <View
                accessibilityRole='image'
                accessibilityLabel={props.accessibilityLabel}
                style={{
                    width: props.width,
                    height: props.height,
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: '#aaa',
                }}
            />
        );
    }
};
