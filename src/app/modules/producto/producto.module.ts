import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';


@NgModule({
  declarations: [
    ProductoComponent,
    JugueteComponent,
    IndumentariaComponent,
    AlimentacionComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
