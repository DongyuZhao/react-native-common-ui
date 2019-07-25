export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type FontStyle = 'normal' | 'italic';
export type AlertLevel = 'info' | 'good' | 'warn' | 'danger';
export type ColorVariant = Exclude<keyof ColorSet, 'separator'>;
export type FontVariant = keyof (ContentConfig);
export interface ShadowOffset { width: number; height: number; }

export interface ThemableProps {
    theme: string;
    subtle: boolean;
}

export interface ColorConfig {
    content: string;
    background: string;
    surface: string;
    contrast: string;
    border: string;
    shadow: string;
}

export interface SpacingConfig {
    marginVertical: number;
    marginHorizontal: number;
    paddingVertical: number;
    paddingHorizontal: number;
}

export interface FontConfig {
    fontFamily: string;
    fontSize: number;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    lineHeight: number;
    letterSpacing: number;
}

export interface BorderConfig {
    borderWidth: number;
    borderRadius: number;
    elevation: number;
    shadowOffset: ShadowOffset;
    shadowRadius: number;
    shadowOpacity: number;
}

export interface TitleConfig {
    1: FontConfig;
    2: FontConfig;
    3: FontConfig;
    4: FontConfig;
    5: FontConfig;
    6: FontConfig;
}

export interface ContentConfig {
    primary: FontConfig;
    secondary: FontConfig;
    quote: FontConfig;
    button: FontConfig;
}

export interface HeaderConfig {
    standard: TitleConfig;
    subtitle: TitleConfig;
}

export interface ColorSet {
    primary: ColorConfig;
    secondary: ColorConfig;
    accent: ColorConfig;
    info: ColorConfig;
    good: ColorConfig;
    warn: ColorConfig;
    danger: ColorConfig;
    mark: ColorConfig;
    code: ColorConfig;
    quote: ColorConfig;
    separator: ColorConfig;
}

export interface ColorTheme {
    main: ColorSet;
    subtle: ColorSet;
}

export interface TextTheme {
    header: HeaderConfig;
    content: ContentConfig;
}

export interface BorderTheme {
    alert: BorderConfig;
    badge: BorderConfig;
    button: BorderConfig;
    card: BorderConfig;
    modal: BorderConfig;
}

export interface SpacingTheme {
    alert: SpacingConfig;
    badge: SpacingConfig;
    button: SpacingConfig;
    card: SpacingConfig;
    modal: SpacingConfig;
    text: SpacingConfig;
}

export interface UxTheme {
    color: ColorTheme;
    font: TextTheme;
    border: BorderTheme;
    spacing: SpacingTheme;
}
