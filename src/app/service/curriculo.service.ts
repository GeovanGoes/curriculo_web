import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class CurriculoService {

    baseURL: string = 'http://localhost:8080';

    resource: string = 'curriculo';

    constructor(private http: HttpClient){ }

    obterCurriculo(id: number){
        return this.http.get(`${this.baseURL}/${this.resource}/${id}`);
    }
}