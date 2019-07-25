export class Guid {
    public static newGuid() {
        const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });

        return id;
    }
}
