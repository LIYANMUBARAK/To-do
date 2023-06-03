import { Component,OnInit } from '@angular/core';
import {Task} from '../../Tasks'
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:Task[]=[]
  constructor(private taskService:TaskService){
  
  }
  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>this.tasks=tasks)
  }
}
