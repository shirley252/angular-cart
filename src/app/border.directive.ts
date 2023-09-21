import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  host: { class: 'border' },
})
export class BorderDirective {
  constructor() {}
}
