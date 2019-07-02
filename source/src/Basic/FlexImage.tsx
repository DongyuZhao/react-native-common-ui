import React, { useEffect, useState } from 'react';
import { Image as ImageFetcher, StyleSheet, View } from 'react-native';
import { isSvg } from 'react-native-svg-component';

import { Image, ImageProps } from './Image';
import { Touchable } from './Touchable';

export interface FlexImageProps extends ImageProps {
    fill: 'stretch' | 'contain' | 'cover' | 'stretch' | 'repeat' | 'center' | 'horizontal' | 'vertical';
    onPress?: () => void;
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
        if (isSvg(uri)) {
            onSizeFetched(props.width, props.height);
        } else {
            ImageFetcher.getSize(uri, onSizeFetched, onSizeError);
        }
    }, [props.source, props.fill]);

    if (state.loaded) {
        return (
            <Touchable
                style={{
                    width: props.width,
                    height: props.height,
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                onPress={props.onPress}
            >
                <Image
                    {...props}
                    width={state.width}
                    height={state.height}
                    resizeMode={props.fill === 'horizontal' || props.fill === 'vertical' ? undefined : props.fill}
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
