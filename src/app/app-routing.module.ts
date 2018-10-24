import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LayOutComponent } from './lay-out/lay-out.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import {LoginComponent} from './login/login.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-user',
    component: ListUserComponent
 },
 {
  path: 'login',
  component: LoginComponent
},
{
   path: 'add-user',
  component: AddUserComponent
},
{
   path: 'edit-user',
   component: EditUserComponent
 },
 {
  path: 'create-task',
  component: CreateTaskComponent
},
{
  path: 'task-list',
  component: TaskListComponent
},
  {
    path: 'home',
    component: LayOutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'what',
        component: WhatWeDoComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path : '',
        component : LoginComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
