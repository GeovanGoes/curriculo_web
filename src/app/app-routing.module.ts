import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarComponent } from './planos/gerenciar/gerenciar.component';
import { CurriculoComponent } from './curriculo/curriculo.component';


const routes: Routes = [
  {path: 'planos', component: GerenciarComponent},
  {path: 'curriculos', component: CurriculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
