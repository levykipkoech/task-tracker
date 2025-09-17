import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ui {
    // private showAddTask: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // showAddTask$: Observable<boolean> = this.showAddTask.asObservable();
    private showAddTask: boolean = false;
  private subject = new Subject<any>();
 
  toggleAddTask():void{
    this.showAddTask= !this.showAddTask
    this.subject.next(this.showAddTask)
    // this.showAddTask.next(!this.showAddTask.value);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
