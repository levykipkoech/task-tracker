import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'levy kipkoech';
}
