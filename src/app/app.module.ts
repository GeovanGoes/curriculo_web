import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FormacaoAcademicaComponent } from './primary/formacao-academica/formacao-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    FormacaoAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CurriculoComponent]
})
export class AppModule { }
