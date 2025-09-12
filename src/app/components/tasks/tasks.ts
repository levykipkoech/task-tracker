import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskSevice } from '../../service/task-sevice';

@Component({
  selector: 'app-tasks',
  standalone: true,  // 👈 make sure it's marked standalone
  imports: [TaskItem, CommonModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']   // 👈 plural
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskSevice) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
    this.tasks = tasks
    })
  }
}

