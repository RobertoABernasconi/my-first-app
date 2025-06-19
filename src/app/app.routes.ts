import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponent } from './first/first.component';

export const routes: Routes = [
    { path: "", redirectTo: "first", pathMatch: "full"},
    { path: "first", component: FirstComponent},
    { path: "second", component: SecondComponentComponent},
];