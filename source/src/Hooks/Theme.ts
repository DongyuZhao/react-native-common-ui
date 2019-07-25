import { useEffect, useState } from 'react';

import { ThemeManager } from '../Utils/Theme';

export const useTheme = (theme: string) => {
    const [state, setState] = useState(ThemeManager.getInstance().getTheme(theme));

    useEffect(() => {
        setState(ThemeManager.getInstance().getTheme(theme));
    }, [theme]);

    return state;
};
