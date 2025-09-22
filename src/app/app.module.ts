import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/task/tasks.module";



@NgModule({
    declarations: [App, HeaderComponent, User],
    bootstrap: [App],
    imports: [BrowserModule, SharedModule, TaskModule],
})
export class AppModule {

}