import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from '@angular/platform-browser';
import { Card } from "./shared/card/card";
import { NewTask } from "./tasks/new-task/new-task";
import { Task } from "./tasks/task/task";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations: [App, HeaderComponent, User, Card, Tasks, Task, NewTask],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule]
})
export class AppModule {

}