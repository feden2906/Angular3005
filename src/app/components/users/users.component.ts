import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service";
import {User} from "../../Interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(value => this.users = value)
  }
}
