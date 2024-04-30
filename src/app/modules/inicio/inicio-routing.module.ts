import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
      path:"",component:InicioComponent}, //definir la ruta del componente inicio
      {path:"inicio",component:InicioComponent} //definir la ruta del componente inicio
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
