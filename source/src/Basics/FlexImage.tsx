import React, { useEffect, useState } from 'react';
import { isSvg } from 'react-native-svg-component';

import { ImageFillMode } from '../Common/Image';
import { ImageUtils } from '../Utils/Image';

import { Image, ImageProps } from './Image';
import { Touchable } from './Touchable';

export interface FlexImageProps extends ImageProps {
    fill: ImageFillMode;
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
        console.log(width, height);
        if (width > 0 && height > 0 && props.width > 0 && props.height > 0) {
            const ratio = width / height;
            const containerRatio = props.width / props.height;
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
            } else if (props.fill === 'auto') {
                if (ratio > containerRatio) {
                    if (width > props.width) {
                        setState({
                            width: props.width,
                            height: props.width / ratio,
                            loaded: true,
                        });
                    } else {
                        setState({
                            width: width,
                            height: width / ratio,
                            loaded: true,
                        });
                    }
                } else {
                    if (height > props.height) {
                        setState({
                            width: props.height * ratio,
                            height: props.height,
                            loaded: true,
                        });
                    } else {
                        setState({
                            width: height * ratio,
                            height: height,
                            loaded: true,
                        });
                    }
                }
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
        if (!isSvg(uri) && (props.fill === 'horizontal' || props.fill === 'vertical' || props.fill === 'auto')) {
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
                    maxWidth: width,
                    maxHeight: height,
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onPress}
            >
                <Image
                    {...others}
                    width={state.width}
                    height={state.height}
                    resizeMode={fill === 'horizontal' || fill === 'vertical' || fill === 'auto' ? undefined : fill}
                />
            </Touchable>
        );
    } else {
        return null;
    }
};
