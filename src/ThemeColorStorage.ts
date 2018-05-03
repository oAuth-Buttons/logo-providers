import { Color } from 'csstype';
export class ThemeColorStorage {
    colorMap: { [key: string]: Color };

    constructor(colorMap: { [key: string]: Color }) {
        this.colorMap = colorMap;
    }

    getColorById(id: string): Color | null {
        return this.colorMap[id] || null;
    }
}