import { Formacao } from './formacao.model';
import { Endereco } from './endereco.model';
import { Habilidade } from './habilidade.model';



export interface Curriculo {

    nome:string;
    cargo: string;
    dataNascimento: string;
    email: string;
    numeroCelular: string;
    endereco: Endereco;
    formacao: Formacao[];
    habilidades: Habilidade[];
}