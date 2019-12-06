import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CurriculoComponent]
})
export class AppModule { }
