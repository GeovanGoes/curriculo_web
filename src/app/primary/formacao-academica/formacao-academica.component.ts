import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacao-academica',
  templateUrl: './formacao-academica.component.html',
  styleUrls: ['./formacao-academica.component.scss']
})
export class FormacaoAcademicaComponent implements OnInit {

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
