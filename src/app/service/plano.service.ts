import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../model/foto.model';
import { Plano } from '../model/plano.model';

@Injectable({
    providedIn: 'root'
})
export class PlanoService {
    baseURL: string = 'http://localhost:9000';
    
    resource: string = 'planning';

    constructor(private http: HttpClient){ }

    criarPlano(plano: Plano)
    {
        return this.http.post(`${this.baseURL}/${this.resource}`, plano);
    }

    listarPlanos()
    {
        return this.http.get(`${this.baseURL}/${this.resource}`);
    }
}