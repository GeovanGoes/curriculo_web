import { Component, OnInit, Input } from '@angular/core';
import { Habilidade } from 'src/app/model/habilidade.model';

@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.scss']
})
export class HabilidadeComponent implements OnInit {

  @Input()
  habilidade: Habilidade;

  constructor() { }

  ngOnInit() {
  }

}
