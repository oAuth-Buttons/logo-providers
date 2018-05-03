import { LocalLogoProvider } from '../src/ts/LocalLogoProvider';
import { Logo } from '../src/ts/Logo';
import { ThemeColorStorage } from '../src/ts/ThemeColorStorage';
import { Color } from 'csstype';

import { expect } from 'chai';

const logoProvider = new LocalLogoProvider([
    '../svg/discord.svg',
    '../svg/facebook.svg',
    '../svg/github.svg',
    '../svg/google.svg',
    '../svg/instagram.svg',
]);
const themeStorage = new ThemeColorStorage({
    'discord': '#7289DA',
    'facebook': '#3c5a99',
    'github': '#1a1414',
    'google': '#ea4335',
    'instagram': '#e53c5c'
});

it('works with logo provider', () => {
    expect(logoProvider.provide('discord').url).to.be.equal('../svg/discord.svg');
    expect(logoProvider.provide('google').url).to.be.equal('../svg/google.svg');
    expect(logoProvider.provide('naver')).to.be.equal(null);
});

it('works with theme storage', () => {
    expect(themeStorage.getColorById('discord')).to.be.equal('#7289DA');
    expect(themeStorage.getColorById('google')).to.be.equal('#ea4335');
    expect(themeStorage.getColorById('naver')).to.be.equal(null);
});