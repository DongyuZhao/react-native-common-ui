import React from 'react';

import { FlexImage, FlexImageProps } from './FlexImage';

export const Avatar = (props: FlexImageProps) => {
    const { width, height, ...others } = props;

    let radius = 0;

    if (width && height) {
        radius = width > height ? height : width;
    }

    return (
        <FlexImage
            {...others}
            width={width}
            height={height}
            style={{
                borderRadius: radius / 2
            }}
        />
    );
};
