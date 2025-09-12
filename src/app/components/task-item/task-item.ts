import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-task-item',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: Task;
  faTimes = faTimes;
    faTrash = faTrash;

}
