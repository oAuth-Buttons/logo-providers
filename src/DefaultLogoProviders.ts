import { LogoProvider, Logo } from './LogoProviders';
import * as path from 'path'

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
        path.resolve('/../svg/discord.svg'),
        path.resolve('/../svg/facebook.svg'),
        path.resolve('/../svg/github.svg'),
        path.resolve('/../svg/google.svg'),
        path.resolve('/../svg/instagram.svg'),
        path.resolve('/../svg/kakao.svg'),
        path.resolve('/../svg/linkedin.svg'),
        path.resolve('/../svg/naver.svg'),
        path.resolve('/../svg/pinterest.svg'),
        path.resolve('/../svg/slack.svg'),
        path.resolve('/../svg/steam.svg'),
        path.resolve('/../svg/telegram.svg'),
        path.resolve('/../svg/twitch.svg'),
        path.resolve('/../svg/twitter.svg'),
        path.resolve('/../svg/wordpress.svg'),
    ]
);