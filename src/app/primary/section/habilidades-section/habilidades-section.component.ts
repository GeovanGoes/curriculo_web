import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Habilidade } from 'src/app/model/habilidade.model';

@Component({
  selector: 'app-habilidades-section',
  templateUrl: './habilidades-section.component.html',
  styleUrls: ['./habilidades-section.component.scss']
})
export class HabilidadesSectionComponent implements OnInit, OnChanges {


  @Input() habilidades: Habilidade[] = [];

  habilidadesMap: Map<String, Habilidade[]> = new Map<String, Habilidade[]>(); 
  keys: Array<String> = new Array<String>();

  constructor() { }
  
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.habilidades)
    {
      if (this.habilidades)
      {
        const habilidadesMap = new Map<String, Habilidade[]>();
        const keys = new Array<String>();
  
        this.habilidades.forEach(habilidade => {
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

}
