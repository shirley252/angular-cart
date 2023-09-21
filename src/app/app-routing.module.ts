import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { MenuComponent } from './menu/menu.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
