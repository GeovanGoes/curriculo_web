import { Component, OnInit } from '@angular/core';
import { Formacao } from '../model/formacao.model';
import { CurriculoService } from '../service/curriculo.service';
import { Curriculo } from '../model/curriculo.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  curriculo: Curriculo;
  formacoesAcademicas: Formacao[] = [];
  formacoesComplementares: Formacao[] = [];

  constructor(private service: CurriculoService) { }

  ngOnInit() {


    this.service.obterCurriculo(1).subscribe(res => {
      console.log(res);


      if (res)
      {
        const curriculo: Curriculo = res as Curriculo;
        if (curriculo)
        {
          this.curriculo = curriculo;
          if (curriculo.formacao)
          {
            curriculo.formacao.forEach(item => {
              if (item.tipoFormacao.descricao == "Formação Complementar")
                this.formacoesComplementares.push(item);
              else if (item.tipoFormacao.descricao == "Formação Acadêmica")
                this.formacoesAcademicas.push(item);
            });
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
