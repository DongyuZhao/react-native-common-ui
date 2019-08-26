import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../Contexts/Theme';
import { ThemeManager } from '../Utils/Theme';

export function useCertainTheme(theme: string) {
    const [state, setState] = useState(ThemeManager.getInstance().getTheme(theme));

    useEffect(() => {
        setState(ThemeManager.getInstance().getTheme(theme));
    }, [theme]);

    return state;
}

export function useThemeFromContext() {
    const themeContext = useContext(ThemeContext);

    return useCertainTheme(themeContext.theme);
}

export function useTheme(theme?: string) {
    return theme ? useCertainTheme(theme) : useThemeFromContext();
}
