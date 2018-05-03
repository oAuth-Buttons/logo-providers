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

export class ThemeColorStorage {
    colorMap: { [key: string]: Color };

    constructor(colorMap: { [key: string]: Color }) {
        this.colorMap = colorMap;
    }

    getColorById(id: string): Color | null {
        return this.colorMap[id] || null;
    }
}