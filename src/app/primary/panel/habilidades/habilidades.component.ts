import { Component, OnInit, Input } from '@angular/core';
import { Habilidade } from 'src/app/model/habilidade.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  @Input()
  habilidades: Habilidade [];

  constructor() { }

  ngOnInit() {
  }

}
