import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: Task
}
