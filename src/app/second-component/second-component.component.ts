import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-second-component',
  standalone: true,
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css',
  imports: [CommonModule],
})

export class SecondComponentComponent {
  numbers: string[] = [];
  populateDivisibleBy(x: number) {
    for (let i = 0; i < 25; i++) {
      if (Math.floor((i+1) % x) == 0) {
        this.numbers[i] = (i+1).toString();
      } else {
        this.numbers[i] = "";
      }
    }
  }
}
