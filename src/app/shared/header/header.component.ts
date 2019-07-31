import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn$ : Observable<boolean>;
   
  constructor(private _userService: AuthService, private _router: Router) { 

  }

  ngOnInit() {
    this.isLoggedIn$ = this._userService.isLoggedIn;
  }

  onLogOutClick(){
    this._userService.logOut();
}


}
