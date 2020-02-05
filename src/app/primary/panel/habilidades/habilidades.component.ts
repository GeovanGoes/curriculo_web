import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Habilidade } from 'src/app/model/habilidade.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit, OnChanges {

  @Input()
  habilidades: Habilidade [];

 

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if (changes.habilidades)
    {
      
    }
  }

  ngOnInit() {
  }

}
