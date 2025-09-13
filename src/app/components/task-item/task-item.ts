import { Component, Input, output, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onTogleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faTrash = faTrash;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onTogleReminder.emit(task);
  }
}
