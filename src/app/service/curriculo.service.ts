import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plano } from '../model/plano.model';



@Injectable({
    providedIn: 'root'
})
export class CurriculoService {

    baseURL: string = 'http://localhost:9000';

    resource: string = 'curriculo';

    constructor(private http: HttpClient){ }

    obterCurriculo(id: number){
        return this.http.get(`${this.baseURL}/${this.resource}/${id}`);
    }

    inserir(plano: Plano){
        return this.http.post(`${this.baseURL}/${this.resource}`, plano);
    }
}