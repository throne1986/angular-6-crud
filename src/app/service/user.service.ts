import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Task } from '../model/task.model';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/users';
  taskUrl = 'http://localhost:3000/task';
  commentsUrl = 'http://localhost:3000/comment';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  createTask(task: Task) {
    return this.http.post(this.taskUrl, task);
  }
  getTask() {
    return this.http.get<Task[]>(this.taskUrl);
  }
  deleteTask(id: number) {
    return this.http.delete(this.taskUrl + '/' + id);
  }
  addComments(comment: Comment) {
    return this.http.post(this.commentsUrl, comment);
  }
  getComments(id: number) {
    return this.http.get<Comment[]>(this.commentsUrl);
  }
  deleteComment(id: number) {
    return this.http.delete(this.commentsUrl + '/' + id);
  }
  /*
  getComments(id: number) {
    return this.http.get<Comment[]>(this.commentsUrl + id);
  }
  */
}
