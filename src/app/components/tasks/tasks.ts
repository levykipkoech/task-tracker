import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { AddTask } from '../add-task/add-task';
import { TaskService } from '../../service/task-sevice';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItem, CommonModule, AddTask],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class Tasks implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private subscription?: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Firestore "live" subscription with proper error handling
    this.subscription = this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
        // You might want to show a user-friendly error message here
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async toggleReminder(task: Task) {
    if (!task.id) return;
    try {
      task.reminder = !task.reminder;
      await this.taskService.updateTaskReminder(task);
      console.log('Reminder updated!');
    } catch (err) {
      console.error('Error updating reminder:', err);
    }
  }

  async deleteTask(task: Task) {
    if (!task.id) return;
    try {
      await this.taskService.deleteTask(task);
      console.log('Task deleted!');
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  }

  async addTask(task: Task) {
    try {
      await this.taskService.addTask(task);
      console.log('Task added!');
      // Firestore auto-syncs via getTasks(), so no manual push needed
    } catch (err) {
      console.error('Error adding task:', err);
    }
  }
}