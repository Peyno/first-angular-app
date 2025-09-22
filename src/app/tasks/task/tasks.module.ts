import { NgModule } from "@angular/core";
import { Task } from "./task";
import { Tasks } from "../tasks";
import { NewTask } from "../new-task/new-task";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [Tasks, Task, NewTask],
    exports: [Tasks], 
    imports: [CommonModule, FormsModule,  SharedModule]
})
export class TaskModule {

}