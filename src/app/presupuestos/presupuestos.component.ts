import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css'],
})
export class PresupuestosComponent {
  presupuestoForm;

  constructor(
    private formBuider: FormBuilder
  ) {
    this.presupuestoForm = this.formBuider.group({
      
       


    })
  }
}
