import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
tasks: Task[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getTask()
      .subscribe( data => {
        this.tasks = data;
        console.log(data);
      });
  }

}
