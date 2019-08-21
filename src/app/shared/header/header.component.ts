import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  isLoggedIn = false;
  private userSub : Subscription;
   
  constructor(private authService: AuthService, 
    private _router: Router) { 

  }

  ngOnInit() {
    this.userSub =  this.authService.user.subscribe(user =>{
      this.isLoggedIn = !!user;
    });
  }

  onLogOutClick(){
    this.authService.signOut();
  }
   ngOnDestroy(){
     this.userSub.unsubscribe();
   }
}
