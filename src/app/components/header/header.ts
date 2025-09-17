import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Subscription } from 'rxjs';
import { Ui } from '../../service/ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Button, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tittle: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private ui: Ui) {
    this.subscription = this.ui.onToggle().subscribe((value)=>(this.showAddTask = value))
  }
 
  toggleAddTask() {
    this.ui.toggleAddTask();
  }
}
