import { UrlLogoProvider } from '../src/DefaultLogoProviders';
import { Logo, ThemeColorStorage } from '../src/LogoProviders';

import { expect } from 'chai';

const logoProvider = new UrlLogoProvider([
    '../svg/discord.svg',
    '../svg/facebook.svg',
    '../svg/github.svg',
    '../svg/google.svg',
    '../svg/instagram.svg',
]);

it('works with logo provider', () => {
    expect(logoProvider.provide('discord').url).to.be.equal('../svg/discord.svg');
    expect(logoProvider.provide('google').url).to.be.equal('../svg/google.svg');
    expect(logoProvider.provide('naver')).to.be.equal(null);
});

it('works with theme storage', () => {
    expect(ThemeColorStorage.getColorById('discord')).to.be.equal('#7289da');
    expect(ThemeColorStorage.getColorById('google')).to.be.equal('#ea4335');
    expect(ThemeColorStorage.getColorById('unset')).to.be.equal(null);
    ThemeColorStorage.extend('test', '#6699ff');
    expect(ThemeColorStorage.getColorById('test')).to.be.equal('#6699ff');
});