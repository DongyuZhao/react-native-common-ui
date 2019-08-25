import React from 'react';

export class ThemeContextClass {
    public theme: string = 'default';
}

export const ThemeContext = React.createContext<ThemeContextClass>({
    theme: 'default'
});
