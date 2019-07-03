import React from 'react';
import { Image as RawImage, ImageProps as RawImageProps } from 'react-native';
import { isSvg, Svg } from 'react-native-svg-component';

export interface ImageProps extends RawImageProps {
    alt: string;
}

export const Image = (props: ImageProps) => {
    const { source, alt, width, height, style, ...others } = props;

    const uri = (source as any).uri as string;

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
            <RawImage
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
