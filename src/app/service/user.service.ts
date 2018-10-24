import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/users';
  taskUrl = 'http://localhost:3000/task';

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
}
