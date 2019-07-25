import React, { useEffect } from 'react';
import {
    AccessibilityRole,
    DeviceEventEmitter,
    LayoutChangeEvent,
    Platform,
    StyleProp,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';

import { Guid } from '../Common/Guid';

export interface TouchableProps {
    testId?: string;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    accessibilityRole?: AccessibilityRole;
    hitSlop?: object;
    activeOpacity?: number;
    onPress?: (data: any) => void;
    onLongPress?: (data: any) => void;
    onLayout?: (event: LayoutChangeEvent) => void;
    children?: React.ReactNode;
}

export const Touchable = (props: TouchableProps) => {
    let testId = props.testId;

    const onPress = (data: any) => {
        if (props.onPress) {
            props.onPress(data);
        }
    };

    useEffect(() => {
        testId = props.testId + Guid.newGuid();
    }, []);

    useEffect(() => {
        if (props.onPress &&  Platform.OS === 'android') {
            DeviceEventEmitter.addListener(`KeyEnter${testId}`, onPress);
        }

        return () => {
            if (props.onPress &&  Platform.OS === 'android') {
                DeviceEventEmitter.removeListener(`KeyEnter${testId}`, onPress);
            }
        };
    }, [props.onPress]);

    if (props.onPress || props.onLongPress) {
        const {
            onLongPress,
            accessibilityRole,
            activeOpacity,
            hitSlop,
            style,
            disabled,
            children,
            ...others
        } = props;

        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    disabled={disabled}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    accessible={true}
                    testID={testId}
                    useForeground={true}
                    hitSlop={hitSlop}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    accessibilityLabel={props.accessibilityLabel}
                    accessibilityRole={accessibilityRole === undefined ? 'button' : accessibilityRole}
                    onLayout={props.onLayout}
                >
                    <View
                        style={style}
                        {...others}
                    >
                        {children}
                    </View>
                </TouchableNativeFeedback>);
        } else {
            return (
                <TouchableOpacity
                    disabled={disabled}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    accessible={true}
                    testID={testId}
                    activeOpacity={activeOpacity}
                    style={style}
                    hitSlop={hitSlop}
                    accessibilityLabel={props.accessibilityLabel}
                    accessibilityRole={accessibilityRole === undefined ? 'button' : accessibilityRole}
                    onLayout={props.onLayout}
                    {...others}
                >
                    {children}
                </TouchableOpacity>
            );
        }
    } else {
        return (
            <View {...props} />
        );
    }
};
