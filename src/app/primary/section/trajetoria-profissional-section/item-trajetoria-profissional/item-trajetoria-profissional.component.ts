import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaProfissional } from 'src/app/model/experiencia-profissional.model';

@Component({
  selector: 'app-item-trajetoria-profissional',
  templateUrl: './item-trajetoria-profissional.component.html',
  styleUrls: ['./item-trajetoria-profissional.component.scss']
})
export class ItemTrajetoriaProfissionalComponent implements OnInit {


  @Input() item: ExperienciaProfissional;

  constructor() { }

  ngOnInit() {
  }

}
