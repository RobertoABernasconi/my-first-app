import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output()
  eventEmitter = new EventEmitter();

  @Input()
  words: String[] = [];

  emitEvent(x: String) {
    console.log(x);
    this.eventEmitter.emit(x);

  }
}
