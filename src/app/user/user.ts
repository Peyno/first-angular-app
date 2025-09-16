import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

interface UserType  {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  @Input({ required: true }) user!: UserType; 
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUer() {
    this.select.emit(this.user.id);
  }
}
