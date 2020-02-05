import { Component, OnInit, Input } from '@angular/core';
import { AtividadeAcademica } from 'src/app/model/atividade-academica.model';

@Component({
  selector: 'app-item-atividade-academica',
  templateUrl: './item-atividade-academica.component.html',
  styleUrls: ['./item-atividade-academica.component.scss']
})
export class ItemAtividadeAcademicaComponent implements OnInit {


  @Input() item: AtividadeAcademica;

  constructor() { }

  ngOnInit() {
  }

}
