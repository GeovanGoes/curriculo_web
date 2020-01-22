import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Formacao } from '../model/formacao.model';
import { CurriculoService } from '../service/curriculo.service';
import { Curriculo } from '../model/curriculo.model';
import { Habilidade } from '../model/habilidade.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  curriculo: Curriculo;
  formacoesAcademicas: Formacao[] = [];
  formacoesComplementares: Formacao[] = [];
  habilidades: Habilidade[] = [];

  $habilidades: Observable<Habilidade[]>;



  constructor(private service: CurriculoService) { }


  ngOnInit() {


    this.service.obterCurriculo(1).subscribe(res => {
      console.log(res);
      if (res)
      {
        this.curriculo = res as Curriculo;
        if (this.curriculo)
        {
          if (this.curriculo.formacao)
          {
            this.curriculo.formacao.forEach(item => {
              if (item.tipoFormacao.descricao == "Formação Complementar")
                this.formacoesComplementares.push(item);
              else if (item.tipoFormacao.descricao == "Formação Acadêmica")
                this.formacoesAcademicas.push(item);
            });
            this.habilidades = this.curriculo.habilidades;
          }
        }
      }
    }, err => console.log(err));

    /*this.formacoesAcademicas.push({anoConclusao: '2015', concluido: true, curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas', instituicao: 'SENAC',link: ''});
    this.formacoesAcademicas.push({anoConclusao: '2013', concluido: true, curso: 'Técnico em Eletrônica', instituicao: 'ETEC - Guaracy Silveira', link: ''});

    

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
*/

  }




}
