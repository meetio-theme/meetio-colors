export interface IColorsBase {
    black: string;
    blue: string;
    brown: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    violet: string;
    white: string;
    yellow: string;
}

export interface IColors {
    accent: string;
    cursor: string;
    foreground: string;
    background: string;
    comments: string;
    invalid: string;
    deprecated: string;
    diffAdded: string;
    diffModified: string;
    diffDeleted: string;
    base: IColorsBase;
}
