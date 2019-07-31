import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../shared';
import { GetUserDetailsApiResponse, ServiceResponse,GetUserModel } from '../../shared/models';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;

  constructor(private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit() {
    
  }
}
