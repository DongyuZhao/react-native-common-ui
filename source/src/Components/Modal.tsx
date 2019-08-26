import React from 'react';
import { Modal as RCTModal, ModalProps as RCTModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { NestableProps } from '../Common/React';
import { ThemableProps } from '../Common/Theme';
import { useTheme } from '../Hooks/Theme';

export interface ModalProps extends RCTModalProps, NestableProps, ThemableProps {
    onBackgroundPress?: () => void;
}

export const Modal = (props: ModalProps) => {
    const { children, onBackgroundPress, theme, subtle, ...others } = props;

    const config = useTheme(theme);

    const color = subtle ? config.color.subtle['primary'] : config.color.main['primary'];

    return (
        <RCTModal  {...others}>
            <TouchableWithoutFeedback
                onPress={onBackgroundPress}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={[
                            config.spacing.modal,
                            config.border.modal,
                            {
                                backgroundColor: color.background,
                                borderColor: color.border,
                                shadowColor: color.shadow,
                                width: '90%'
                            }
                        ]}
                    >
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </RCTModal>
    );
};
