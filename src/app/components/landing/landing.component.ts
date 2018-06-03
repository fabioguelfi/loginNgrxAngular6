import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
