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

  @Input()
  $habilidades: Observable<Habilidade[]>;

  habilidadesMap: Map<String, Habilidade[]> = new Map<String, Habilidade[]>(); 
  keys: Array<String> = new Array<String>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if (changes.habilidades)
    {
      if (this.habilidades)
      {
        const habilidadesMap = new Map<String, Habilidade[]>();
        const keys = new Array<String>();
  
        this.habilidades.forEach(habilidade => {
          console.log(habilidade);
          if (habilidadesMap.has(habilidade.tipoHabilidade.titulo))
          {
            const arr: Habilidade[] = habilidadesMap.get(habilidade.tipoHabilidade.titulo);
            arr.push(habilidade);
            habilidadesMap.set(habilidade.tipoHabilidade.titulo, arr);
          }
          else
          {
            habilidadesMap.set(habilidade.tipoHabilidade.titulo, [habilidade]);
            keys.push(habilidade.tipoHabilidade.titulo);
          }
        });
  
        this.habilidadesMap = habilidadesMap;
        this.keys = keys;
      }
    }
  }

  ngOnInit() {
  }

}
