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
  numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
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
