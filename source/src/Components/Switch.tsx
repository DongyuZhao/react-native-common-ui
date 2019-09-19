import React from 'react';
import { Switch as RCTSwitch, View } from 'react-native';

import { CheckBox } from '../Basics/CheckBox';
import { Touchable } from '../Basics/Index';
import { Radio } from '../Basics/Radio';
import { NestableProps } from '../Common/React';
import { ColorVariant, ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export type SwitchType = 'checkbox' | 'radio' | 'toggle';

export interface SwitchProps extends NestableProps, ThemableProps {
    value?: boolean;
    type: SwitchType;
    variant: ColorVariant;
    onSwitch: () => void;
}

export const Switch = (props: SwitchProps) => {
    const { value, type, children, onSwitch, theme, subtle, variant } = props;

    const config = useTheme(theme);

    const colorSet = subtle ? config.color.subtle : config.color.main;

    const color = colorSet[variant];

    switch (type) {
        case 'checkbox':
            return (
                <Touchable
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={onSwitch}
                >
                    <CheckBox
                        checked={value}
                        width={24}
                        height={24}
                        color={color.content}
                        style={{
                            marginRight: 4
                        }}
                    />
                    {children}
                </Touchable>
            );
        case 'radio':
            return (
                <Touchable
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={onSwitch}
                >
                    <Radio
                        checked={value}
                        width={24}
                        height={24}
                        color={color.content}
                        style={{
                            marginRight: 4
                        }}
                    />
                    {children}
                </Touchable>
            );
        case 'toggle':
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <RCTSwitch
                        value={value}
                        onValueChange={onSwitch}
                        thumbColor={colorSet.separator.surface}
                        trackColor={{
                            true: color.content,
                            false: colorSet.separator.border
                        }}
                        style={{
                            marginRight: 4
                        }}
                    />
                    {children}
                </View>
            );
        default:
            return null;
    }
};
