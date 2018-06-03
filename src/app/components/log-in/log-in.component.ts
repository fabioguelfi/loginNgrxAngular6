import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.user);
  }

}
