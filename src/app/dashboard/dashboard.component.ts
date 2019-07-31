import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _userService: AuthService,private _router: Router) { }

  ngOnInit() {
  }

  
}
