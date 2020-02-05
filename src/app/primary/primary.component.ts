import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Formacao } from '../model/formacao.model';
import { Habilidade } from '../model/habilidade.model';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit, OnChanges {
  

  @Input() curriculo: Curriculo;
  formacoes: any = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.curriculo)
    {
      if (this.curriculo.formacao)
      {
        const complementar = [];
        const academica = [];
        this.curriculo.formacao.forEach(item => {
          if (item.tipoFormacao.descricao == "Formação Complementar")
            complementar.push(item);
          else if (item.tipoFormacao.descricao == "Formação Acadêmica")
            academica.push(item);
        });
        this.formacoes.complementar = complementar;
        this.formacoes.academica = academica;
        console.log('formacoes', this.formacoes);
      }
    }
  }

}
