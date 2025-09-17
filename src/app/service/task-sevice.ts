import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  onSnapshot,
  FirestoreDataConverter
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const taskConverter: FirestoreDataConverter<Task> = {
  toFirestore(task: Task) {
    return { ...task };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)!;
    return {
      ...data
    } as Task;
  }
};

@Injectable({ providedIn: 'root' })
export class TaskService {
  private firestore = inject(Firestore);

  constructor() {}

  getTasks(): Observable<Task[]> {
    return new Observable<Task[]>((observer) => {
      const tasksRef = collection(this.firestore, 'task-tracker');
      const q = query(tasksRef);
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasks: Task[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const task: Task = {
            id: doc.id,                        // Keep as string (no conversion)
            text: data['text'] || '',          // Use bracket notation
            day: data['day'] || '',            // Use bracket notation
            reminder: data['reminder'] || false // Use bracket notation
          };
          tasks.push(task);
        });
        observer.next(tasks);
      }, (error) => {
        observer.error(error);
      });

      return () => unsubscribe();
    });
  }

  addTask(task: Task) {
    // Remove the id when adding (Firestore will generate it)
    const { id, ...taskData } = task;
    const tasksRef = collection(this.firestore, 'task-tracker').withConverter(taskConverter);
    return addDoc(tasksRef, taskData as Task);
  }

  updateTaskReminder(task: Task) {
    if (!task.id) throw new Error('Task ID is required');
    const taskDoc = doc(this.firestore, `task-tracker/${task.id}`).withConverter(taskConverter);
    return updateDoc(taskDoc, { reminder: task.reminder });
  }

  deleteTask(task: Task) {
    if (!task.id) throw new Error('Task ID is required');
    const taskDoc = doc(this.firestore, `task-tracker/${task.id}`).withConverter(taskConverter);
    return deleteDoc(taskDoc);
  }
}