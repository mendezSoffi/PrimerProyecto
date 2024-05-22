import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';

const routes: Routes = [

  {path:"producto",component:ProductoComponent},
  {path:"juguete",component:JugueteComponent},
  {path:"indumentaria",component:IndumentariaComponent},
  {path:"alimentacion",component:AlimentacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule {
 }