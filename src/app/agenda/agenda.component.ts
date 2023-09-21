import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  agendaForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.agendaForm = this.formBuilder.group({
      name: [null, [Validators.required]],
     
    });
  }

  get name() {
    return this.agendaForm.get('name')
  }
}
