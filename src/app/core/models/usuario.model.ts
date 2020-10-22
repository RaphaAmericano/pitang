import { Repositorio } from './repositorio.model';
export interface Usuario {
    avatar: string;
    name: string;
    repo: Repositorio[];
    url: string;
    username:string;
}