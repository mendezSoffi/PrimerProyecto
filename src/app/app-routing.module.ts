import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [//RUTA POR DEFECTO EN LA INICIALIZACION
  {
    path:"",component:InicioComponent //definir la ruta del componente inicio
  },
  {
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  //ruta que nos vincula al modulo de inicio y todo su contenido
  //loadchildren: indica que habra una ruta hija
  //.then: funcion asincronica tipo PROMESA
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
