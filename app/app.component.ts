import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() name: string = 'Angular 5';
  @Output() nameChange = new EventEmitter<string>();

  updateName(event) {
    console.log(event);
    this.name = event;
  }
}
