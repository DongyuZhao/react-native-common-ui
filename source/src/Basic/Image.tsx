import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';
import { isSvg, Svg } from 'react-native-svg-component';

export interface ImageProps extends RNImageProps {
    alt: string;
    width: number;
    height: number;
}

export const Image = (props: ImageProps) => {
    const { source, alt, width, height, style, ...others } = props;

    const uri = (source as any).uri as string;
    console.log(width, height);
    if (isSvg(uri)) {
        return (
            <Svg
                {...others}
                source={source}
                accessibilityLabel={alt}
                width={width}
                height={height}
                style={style}
            />
        );
    } else {
        return (
            <RNImage
                {...others}
                source={source}
                accessibilityLabel={alt}
                style={[
                    {
                        width: width,
                        height: height
                    },
                    style
                ]}
            />
        );
    }
};
