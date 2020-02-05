import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaProfissional } from 'src/app/model/experiencia-profissional.model';

@Component({
  selector: 'app-trajetoria-profissional-section',
  templateUrl: './trajetoria-profissional-section.component.html',
  styleUrls: ['./trajetoria-profissional-section.component.scss']
})
export class TrajetoriaProfissionalSectionComponent implements OnInit {


  @Input() trajetoria: ExperienciaProfissional[];

  constructor() { }

  ngOnInit() {
  }

}
