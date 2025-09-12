import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskItem } from '../task-item/task-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
tasks: Task[] = TASKS

}
