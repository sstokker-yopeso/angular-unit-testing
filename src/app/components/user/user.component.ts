import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  text = 'User Panel';
  users: string[];

  constructor(
    private userService: UserService,
  ) {
    this.users = this.userService.getUsers();
  }

}
