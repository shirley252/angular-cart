import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BorderDirective } from './border.directive';
import { ProductosComponent } from './productos/productos.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,

    BorderDirective,
    ProductosComponent,
    PresupuestosComponent,
    ContactoComponent,
    MenuComponent,
    AgendaComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
