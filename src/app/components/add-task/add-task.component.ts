import { Component,OnInit ,Output,EventEmitter} from '@angular/core';
import {Task} from '../../Tasks'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  text!:string
  day!:string
  reminder:boolean = false
  showAddTask!:boolean
  subscription!:Subscription
  constructor(private uiService:UiService){ 
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value))
  }

@Output() onAddTask:EventEmitter<Task>=new EventEmitter

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert("Please enter the Task")
      return
    }
    const newTask = {
      text: this.text,
      day:this.day,
      reminder:this.reminder
    } 
    this.text = ''
    this.day = ''
    this.reminder = false

    this.onAddTask.emit(newTask)
  }

 
   
  

}
