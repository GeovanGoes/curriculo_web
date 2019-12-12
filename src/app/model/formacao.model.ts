import { TipoFormacao } from './tipo-formacao.model';



export interface Formacao {
  nomeInstituicao: string;
  descricaoInstituicao: string;
  nomeCurso: string;
  concluido: boolean;
  anoConlusao: string;
  link: string;
  tipoFormacao: TipoFormacao;
}