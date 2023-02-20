import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { UserDataComponent } from './user-data/user-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newTask', component: TaskFormComponent},
  {path: 'task/:id', component: EditTaskComponent},
  {path: 'user/:id', component: EditUserComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    GetTaskComponent,
    HeaderComponent,
    TaskFormComponent,
    UserDataComponent,
    DashboardComponent,
    EditTaskComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GetTaskComponent, HeaderComponent, TaskFormComponent, UserDataComponent, DashboardComponent, EditTaskComponent, EditUserComponent]
})
export class AppModule { }
