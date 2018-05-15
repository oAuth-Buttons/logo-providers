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