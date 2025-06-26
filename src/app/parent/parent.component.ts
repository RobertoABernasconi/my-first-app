import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  ptext = " ";
  categoryForChild: string[] = [];

  setCategory(category: string) {
    switch (category) {
      case "Fruit":
        this.categoryForChild = ["Apple", "Banana", "Pineapple"];
        break;
      case "Bird":
        this.categoryForChild = ["Raven", "Emu", "Parakeet"];
        break;
      case "Vehicle":
        this.categoryForChild = ["Bike", "Car", "Plane"];
        break;
      default:
        this.categoryForChild = ["Apple", "Banana", "Pineapple", "Raven", "Emu", "Parakeet", "Bike", "Car", "Plane"];
    }
  }

  receiveMessage($event: Event) {
    this.ptext = $event.toString();

  }

}
