import { Component, OnInit, Input } from '@angular/core';
import { Formacao } from 'src/app/model/formacao.model';

@Component({
  selector: 'app-formacao-complementar',
  templateUrl: './formacao-complementar.component.html',
  styleUrls: ['./formacao-complementar.component.scss']
})
export class FormacaoComplementarComponent implements OnInit {

  @Input()
  formacoesComplementares: Formacao[];

  constructor() { }

  ngOnInit() {
  }

}
