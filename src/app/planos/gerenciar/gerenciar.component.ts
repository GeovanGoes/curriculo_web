import { Component, OnInit } from '@angular/core';
import { PlanoService } from 'src/app/service/plano.service';
import { Plano } from 'src/app/model/plano.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.scss']
})
export class GerenciarComponent implements OnInit {

  planos: Plano[];

  form: FormGroup;

  constructor(private service: PlanoService, private formBuilder: FormBuilder) { console.log('cons')}

  ngOnInit() {
    console.log('init');
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      fotos: [[]]
    });


    this.service.listarPlanos().subscribe(response => {
      this.planos = response as Plano[];
    });
  }


  submit()
  {
    console.log(this.form.getRawValue());

    this.service.criarPlano(this.form.getRawValue()).subscribe(response => {
      console.log(response);
    });
  }



}
