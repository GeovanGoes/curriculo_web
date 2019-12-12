import { TipoHabilidade } from './tipo-habilidade.model';



export interface Habilidade {
    nivel: string;
    titulo: string;
    tipoHabilidade: TipoHabilidade;
}