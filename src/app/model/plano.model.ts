import { Foto } from './foto.model';



export interface Plano {

    title: String;
    description: String;
    fotos: Foto[];
}