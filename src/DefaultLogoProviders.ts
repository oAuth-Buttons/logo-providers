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
}

export const DefaultLogoProvider = new UrlLogoProvider(
    [
        __dirname + '/svg/discord.svg',
        __dirname + '/svg/facebook.svg',
        __dirname + '/svg/github.svg',
        __dirname + '/svg/google.svg',
        __dirname + '/svg/instagram.svg',
        __dirname + '/svg/kakao.svg',
        __dirname + '/svg/linkedin.svg',
        __dirname + '/svg/naver.svg',
        __dirname + '/svg/pinterest.svg',
        __dirname + '/svg/slack.svg',
        __dirname + '/svg/steam.svg',
        __dirname + '/svg/telegram.svg',
        __dirname + '/svg/twitch.svg',
        __dirname + '/svg/twitter.svg',
        __dirname + '/svg/wordpress.svg'
    ]
);