import { LogoProvider } from './LogoProvider';
import { Logo } from './Logo';

export class LocalLogoProvider implements LogoProvider {
    name: 'LocalLogoProvider';
    private fileList: string[];

    constructor(fileList: string[]) {
        this.fileList = fileList;
    }

    provide(id: string): Logo | null {
        for (let file of this.fileList) {
            let dot = file.lastIndexOf('.');
            let name = file;
            if(dot !== -1) {
                name = name.substring(0, dot);
            }
            if (name.endsWith(id)) {
                return new Logo(file, id);
            }
        }
        return null;
    }
};