import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;
  constructor(private store: Store<fromAuth.State>) { }
  

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
    
  }

}
