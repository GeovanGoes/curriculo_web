import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FormacaoComponent } from './primary/formacao/formacao.component';
import { FormacaoComplementarComponent } from './primary/panel/formacao-complementar/formacao-complementar.component';
import { FormacaoAcademicaComponent } from './primary/panel/formacao-academica/formacao-academica.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurriculoService } from './service/curriculo.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    FormacaoComponent,
    FormacaoAcademicaComponent,
    FormacaoComplementarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CurriculoComponent]
})
export class AppModule { }
