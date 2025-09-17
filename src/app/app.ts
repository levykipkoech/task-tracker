import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Routes } from '@angular/router';
import { Tasks } from './components/tasks/tasks';
//import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: Tasks}
]
@Component({
  selector: 'app-root',
  imports: [Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'levy kipkoech';
 
}
