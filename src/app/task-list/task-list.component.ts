import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { Comment } from '../model/comment.model';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
tasks: Task[];
comments: Comment[];
numberOflikes = 0;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router,  private activeRouter: ActivatedRoute, private userService: UserService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.userService.getTask()
      .subscribe( data => {
        this.tasks = data;
      });
      this.activeRouter.params.subscribe((params) => {
        // tslint:disable-next-line:prefer-const
        let id = params['id'];
        this.userService.getComments(id)
        .subscribe(data => {
          this.comments = data;
          });
      });
      this.addForm = this.formBuilder.group({
        id: [],
        author: ['', Validators.required],
        description: ['', Validators.required],
      });
  }
  addComments(task_id) {
    const formData = this.addForm.value;
    formData.task_id = task_id;
    this.userService.addComments(formData)
    .subscribe(data => {
      this.comments.push(this.addForm.value);
    });
   this.router.navigate(['task-list']);
  }
  deleteComment(comment: Comment): void {
    this.userService.deleteComment(comment.id)
      .subscribe( data => {
        this.comments = this.comments.filter(u => u !== comment);
      });
  }
  deleteTask(task: Task): void {
    this.userService.deleteTask(task.id)
      .subscribe( data => {
        this.tasks = this.tasks.filter(u => u !== task);
      });
  }
  likeButtonClick() {
    this.numberOflikes++;
  }
  dislikeButtonClick() {
    this.numberOflikes--;
  }
}
