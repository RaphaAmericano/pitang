import { Repositorio } from './repositorio.model';
export interface Usuario {
    id?: number;
    avatar: string;
    avatar_url?: string;
    name: string;
    repo: Repositorio[];
    url: string;
    username:string;
    login?: string;
    repos?: Repositorio[];
    repos_url?: string;
    html_url?: string;
}