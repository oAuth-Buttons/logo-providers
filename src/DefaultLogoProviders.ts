import { LogoProvider, Logo } from './LogoProviders';

export class UrlLogoProvider implements LogoProvider {
    name: 'LocalLogoProvider';
    private readonly urlList: string[];

    constructor(fileList: string[]) {
        this.urlList = fileList;
    }

    provide(id: string): Logo | null {
        for (let file of this.urlList) {
            let dot = file.lastIndexOf('.');
            let name = file;
            if (dot !== -1) {
                name = name.substring(0, dot);
            }
            if (name.endsWith(id)) {
                return new Logo(file, id);
            }
        }
        return null;
    }
};