import { Logo } from './Logo';

export interface LogoProvider {
    name: string;

    provide(id: String): Logo | null
}