import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  @Input()
  instituicao: string;

  @Input()
  curso: string;

  @Input()
  concluido: boolean;

  @Input()
  anoConclusao: string;

  constructor() { }

  ngOnInit() {
  }

}
