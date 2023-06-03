import { Injectable } from '@angular/core';
import {Task} from '../Tasks'
import {TASKS} from '../mock-tasks'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTask():Observable<Task[]>{
    const task = of(TASKS)
    return task
  }
}
