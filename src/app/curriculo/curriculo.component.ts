import { Component, OnInit } from '@angular/core';
import { FormacaoAcademica } from '../model/formacao-academica.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  formacoesAcademicas: FormacaoAcademica[] = [];

  constructor() { }

  ngOnInit() {

    this.formacoesAcademicas.push({anoConclusao: '2015', concluido: true, curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas', instituicao: 'SENAC'});
    this.formacoesAcademicas.push({anoConclusao: '2013', concluido: true, curso: 'Técnico em Eletrônica', instituicao: 'ETEC - Guaracy Silveira'});
  }

}
