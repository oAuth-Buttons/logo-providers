import { Color } from 'csstype';

export interface LogoProvider {
    name: string;

    provide(id: String): Logo | null;
}

export class Logo {
    url: string;
    id: string;

    constructor(url: string, id: string) {
        this.url = url;
        this.id = id;
    }
}

export const ThemeColorStorage = {
    // private value
    colorMap: {
        'discord': '#7289da',
        'facebook': '#3c5a99',
        'github': '#1a1414',
        'google': '#ea4335',
        'instagram': '#e53c5c',
        'kakao': '#ffeb00',
        'linkedin': '#0077b5',
        'naver': '#1ec800',
        'pinterest': '#bd081c',
        'slack': '#78d4b6',
        'steam': '#221e1f',
        'telegram': '#37aee2',
        'twitch': '#6441A4',
        'twitter': '#1da1f2',
        'wordpress': '#494541'
    },

    extend(id: string, color: Color): void {
        this.colorMap[id] = color;
    },

    getColorById(id: string): Color | null {
        return this.colorMap[id] || null;
    }
};

export const SubThemeColorStorage = {
    // private value
    colorMap: {
        'discord': '#8392c7',
        'facebook': '#516184',
        'github': '#181516',
        'google': '#d3554a',
        'instagram': '#ce536a',
        'kakao': '#e5d419',
        'linkedin': '#116ea0',
        'naver': '#29a011',
        'pinterest': '#ab1b2c',
        'slack': '#89c2af',
        'steam': '#212121',
        'telegram': '#4da5cb',
        'twitch': '#6a588d',
        'twitter': '#349ad9',
        'wordpress': '#564432'
    },

    extend(id: string, color: Color): void {
        this.colorMap[id] = color;
    },

    getColorById(id: string): Color | null {
        return this.colorMap[id] || null;
    }
};