import { Component, OnInit } from '@angular/core';
import { Formacao } from '../model/formacao.model';
import { CurriculoService } from '../service/curriculo.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  formacoesAcademicas: Formacao[] = [];
  formacoesComplementares: Formacao[] = [];

  constructor(private service: CurriculoService) { }

  ngOnInit() {

    this.formacoesAcademicas.push({anoConclusao: '2015', concluido: true, curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas', instituicao: 'SENAC',link: ''});
    this.formacoesAcademicas.push({anoConclusao: '2013', concluido: true, curso: 'Técnico em Eletrônica', instituicao: 'ETEC - Guaracy Silveira', link: ''});

    this.service.obterCurriculo(1).subscribe(res => {
      console.log(res);
    }, err => console.log(err));

    this.formacoesComplementares.push({
      instituicao: 'SENAC',
      curso: 'Técnico - Gestão em Vendas',
      concluido: true,
      anoConclusao: '2010',
      link: 'http://www.sp.senac.br/'
    });

    this.formacoesComplementares.push({
      instituicao: 'SENAC',
      curso: 'Técnico - Gestão em Vendas',
      concluido: true,
      anoConclusao: '2010',
      link: 'http://www.sp.senac.br/'
    });

    this.formacoesComplementares.push({
      instituicao: 'SENAC',
      curso: 'Técnico - Gestão em Vendas',
      concluido: true,
      anoConclusao: '2010',
      link: 'http://www.sp.senac.br/'
    });

  }

}
