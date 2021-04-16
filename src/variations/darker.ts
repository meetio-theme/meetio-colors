import { IColors } from './../interfaces';

export const darker: IColors = {
    accent: '#80CBC4',
    foreground: '#DEDFE4',
    background: '#212121',
    cursor: '#FFCC00',
    comments: '#545454',
    deprecated: '#FFC777A1',
    diffAdded: 'color(var(green) alpha(0.25))',
    diffDeleted: 'color(var(red) alpha(0.25))',
    diffModified: 'color(var(yellow) alpha(0.25))',
    invalid: '#D46C6C66',
    base: {
        black: '#000000',
        blue: '#82AAFF',
        brown: '#916B53',
        cyan: '#89DDFF',
        green: '#C3E88D',
        orange: '#F78C6C',
        pink: '#FF9CAC',
        purple: '#C792EA',
        red: '#F07178',
        violet: '#BB80B3',
        white: '#FFFFFF',
        yellow: '#FFCB6B',
    },
};
