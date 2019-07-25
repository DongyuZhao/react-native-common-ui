import { UxTheme } from '../Common/Theme';
import { Dark, Default as DefaultTheme } from '../Configs/Themes/Index';

import { ObjectUtils } from './Object';

export class ThemeManager {
    private readonly dict: { [key: string]: UxTheme } = {};

    private static _instance: ThemeManager;

    public addTheme(theme: UxTheme, name: string) {
        this.dict[name] = ObjectUtils.merge(this.getTheme(name), theme);
    }

    public getTheme(name: string) {
        return this.dict[name] ? this.dict[name] : this.dict['default'];
    }

    protected constructor() {
        this.dict['default'] = DefaultTheme;
        this.dict['dark'] = Dark;
    }

    public static getInstance() {
        if (!this._instance) {
            this._instance = new ThemeManager();
        }

        return this._instance;
    }
}
