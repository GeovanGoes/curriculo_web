import { Component, OnInit, Input } from '@angular/core';
import { AtividadeAcademica } from 'src/app/model/atividade-academica.model';

@Component({
  selector: 'app-atividades-academicas-section',
  templateUrl: './atividades-academicas-section.component.html',
  styleUrls: ['./atividades-academicas-section.component.scss']
})
export class AtividadesAcademicasSectionComponent implements OnInit {


  @Input() atividadesAcademicas: AtividadeAcademica[];
  
  constructor() { }

  ngOnInit() {
  }

}
