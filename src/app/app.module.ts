import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FormacaoComponent } from './primary/formacao/formacao.component';
import { FormacaoComplementarComponent } from './primary/panel/formacao-complementar/formacao-complementar.component';
import { FormacaoAcademicaComponent } from './primary/panel/formacao-academica/formacao-academica.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HabilidadeComponent } from './primary/panel/habilidade/habilidade.component';
import { HabilidadesComponent } from './primary/panel/habilidades/habilidades.component';
import { HabilidadesSectionComponent } from './primary/section/habilidades-section/habilidades-section.component';
import { FormacaoSectionComponent } from './primary/section/formacao-section/formacao-section.component';
import { TrajetoriaProfissionalSectionComponent } from './primary/section/trajetoria-profissional-section/trajetoria-profissional-section.component';
import { AtividadesAcademicasSectionComponent } from './primary/section/atividades-academicas-section/atividades-academicas-section.component';
import { ItemTrajetoriaProfissionalComponent } from './primary/section/trajetoria-profissional-section/item-trajetoria-profissional/item-trajetoria-profissional.component';
import { ItemAtividadeAcademicaComponent } from './primary/section/atividades-academicas-section/item-atividade-academica/item-atividade-academica.component';
import { PrimaryComponent } from './primary/primary.component';
import { GerenciarComponent } from './planos/gerenciar/gerenciar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    FormacaoComponent,
    FormacaoAcademicaComponent,
    FormacaoComplementarComponent,
    HabilidadeComponent,
    HabilidadesComponent,
    HabilidadesSectionComponent,
    FormacaoSectionComponent,
    TrajetoriaProfissionalSectionComponent,
    AtividadesAcademicasSectionComponent,
    ItemTrajetoriaProfissionalComponent,
    ItemAtividadeAcademicaComponent,
    PrimaryComponent,
    GerenciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [GerenciarComponent]
})
export class AppModule { }
