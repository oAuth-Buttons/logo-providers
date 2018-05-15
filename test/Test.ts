import { DefaultLogoProvider } from '../src/DefaultLogoProviders';
import { ThemeColorStorage } from '../src/LogoProviders';

import { expect } from 'chai';
import * as Path from 'path';

it('works with logo provider', () => {
    let discord = Path.normalize(DefaultLogoProvider.provide('discord').url);
    expect(discord).to.be.equal(Path.resolve(__dirname, '../svg/discord.svg'));

    let google = Path.normalize(DefaultLogoProvider.provide('google').url);
    expect(google).to.be.equal(Path.resolve(__dirname, '../svg/google.svg'));

    expect(DefaultLogoProvider.provide('unset')).to.be.equal(null);
});

it('works with theme storage', () => {
    expect(ThemeColorStorage.getColorById('discord')).to.be.equal('#7289da');
    expect(ThemeColorStorage.getColorById('google')).to.be.equal('#ea4335');
    expect(ThemeColorStorage.getColorById('unset')).to.be.equal(null);
    ThemeColorStorage.extend('test', '#6699ff');
    expect(ThemeColorStorage.getColorById('test')).to.be.equal('#6699ff');
});