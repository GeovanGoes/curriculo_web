import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../service/curriculo.service';
import { Curriculo } from '../model/curriculo.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  curriculo: Curriculo;

  constructor(private service: CurriculoService) { }


  ngOnInit() {


    this.service.obterCurriculo(1).subscribe(res => {
      console.log(res);
      if (res)
        this.curriculo = res as Curriculo;
    }, err => console.log(err));
  }




}
