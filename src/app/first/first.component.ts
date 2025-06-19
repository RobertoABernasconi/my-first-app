import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [
    CommonModule,
    FormsModule,
],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
    count = 0;
  title = 'Data Binding';
  picturePath: string = "icon.png";
  currentText = '';
  numbers = ['uno', 'due', 'tre', 'quattro', 'cinque'];
  horoscope = 0;
  highlightColour = 'white';
  check($event: MouseEvent) {
    const buttonClicked = $event.target as HTMLInputElement;
    if (this.currentText == 'disattiva') {
      buttonClicked.disabled = true;
      this.currentText = 'bottone disattivato con successo';
    }
  }
  passValueToComponent(e: Event) {
    const inputElement = e.target as HTMLInputElement
    this.currentText = inputElement.value;
  }

  increment() {
    this.count++;
  }

  changeColour(colour: string) {
    this.highlightColour = colour;
  }

}
