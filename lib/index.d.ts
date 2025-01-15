declare const dict: {
    [key: string]: string[];
};
export declare function pinyin(char: string): string[] | undefined;
export declare function detailedPinyin(char: string): string[] | undefined;
export declare function all(): Readonly<typeof dict>;
export {};
