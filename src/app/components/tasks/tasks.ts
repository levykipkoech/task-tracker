import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskSevice } from '../../service/task-sevice';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItem, CommonModule, AddTask],
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

 
  TogleReminder(task: Task) {
     if (!task.id) return;
     
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

   deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  addTask(task: Task){
   this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    });
  }
}
