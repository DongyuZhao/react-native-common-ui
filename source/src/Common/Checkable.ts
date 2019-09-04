import { StyleProp, ViewStyle } from 'react-native';

export interface CheckMarkProps {
    width: number;
    height: number;
    color: string;
    style?: StyleProp<ViewStyle>;
}

export interface CheckBoxProps extends CheckMarkProps {
    checked?: boolean;
}
