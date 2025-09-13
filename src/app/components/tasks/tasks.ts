import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskSevice } from '../../service/task-sevice';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItem, CommonModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskSevice) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  TogleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
