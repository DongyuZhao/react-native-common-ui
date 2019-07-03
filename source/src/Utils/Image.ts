import { Image } from 'react-native';

export class ImageUtils {
    private static readonly cache: { [key: string]: { width: number, height: number } } = {};

    public static fetchSize(url: string, onSuccess: (width: number, height: number) => void, onError: (error: any) => void) {
        if (url && this.cache[url] && onSuccess) {
            onSuccess(this.cache[url].width, this.cache[url].height);
        } else {
            Image.getSize(
                url,
                (width, height) => {
                    this.cache[url] = { width, height };
                    if (onSuccess) {
                        onSuccess(width, height);
                    }
                },
                (error) => {
                    if (onError) {
                        onError(error);
                    }
                }
            );
        }
    }
}
