import { Component, OnInit, Input } from '@angular/core';
import { Formacao } from 'src/app/model/formacao.model';

@Component({
  selector: 'app-formacao-academica',
  templateUrl: './formacao-academica.component.html',
  styleUrls: ['./formacao-academica.component.scss']
})
export class FormacaoAcademicaComponent implements OnInit {

  @Input()
  formacoesAcademicas: Formacao[];

  constructor() { }

  ngOnInit() {
    console.log("formações academicas: ", this.formacoesAcademicas);
  }

}
