import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { UserInterface } from './user.model';
import { Card } from "../shared/card/card";



@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  @Input({ required: true }) user!: UserInterface; 
  @Input({required: true}) selected!: boolean; 
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUer() {
    this.select.emit(this.user.id);
  }
}
