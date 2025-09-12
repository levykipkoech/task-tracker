import { TestBed } from '@angular/core/testing';

import { TaskSevice } from './task-sevice';

describe('TaskSevice', () => {
  let service: TaskSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
