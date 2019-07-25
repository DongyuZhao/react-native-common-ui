type Partial<T, K extends keyof T> = ((prev: Readonly<T>) => (Pick<T, K> | T | null)) | (Pick<T, K> | T | null);

export class ObjectUtils {
    public static assign<T, K extends keyof T>(prev: T, partial: Partial<T, K>) {
        if (this.isObject(prev) && this.isObject(partial)) {
            return { ...prev, ...partial };
        }

        if (partial !== null && partial !== undefined) {
            return partial as T;
        }

        return prev;
    }

    public static merge<T extends {}, K extends {}>(target: T, source: K) {
        const result = { ...target } as { [key: string]: any };
        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach(key => {
                const srcProp = (source as any)[key];
                const tarProp = (target as any)[key];
                if (this.isObject(srcProp)) {
                    if (!(key in target)) {
                        Object.assign(result, { [key]: srcProp });
                    } else {
                        result[key] = this.merge(tarProp, srcProp);
                    }
                } else {
                    Object.assign(result, { [key]: srcProp });
                }
            });
        }

        return result as T & K;
    }

    public static isObject<T>(target: T) {
        return target !== null && target !== undefined && typeof target === 'object';
    }
}
