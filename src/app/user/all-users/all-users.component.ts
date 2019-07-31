import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared';
import { GetUserDetailsApiResponse, UserDetailsApiResponse, ServiceResponse, GetUserModel } from '../../shared/models';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  userList: GetUserDetailsApiResponse[] = [];
  displayRightPanel: boolean;
  userId: number;
  modelObj: GetUserDetailsApiResponse;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAllUsers();
  }


  loadAllUsers() {
    this.userService.getAllUsers().subscribe((userInfo: ServiceResponse<UserDetailsApiResponse>) => {
      if (userInfo.isValid) {
        for (var i = 0; i <= userInfo.response.usersList.length - 1; i++) {
          let userResponse = new GetUserDetailsApiResponse();
          userResponse.emailAddress = userInfo.response.usersList[i].emailAddress;
          userResponse.firstName = userInfo.response.usersList[i].firstName;
          userResponse.gender = userInfo.response.usersList[i].gender;
          userResponse.lastName = userInfo.response.usersList[i].lastName;
          userResponse.userId = userInfo.response.usersList[i].userId;
          this.userList.push(userResponse);
        }

        for (var i = 0; i <= userInfo.response.usersList.length - 1; i++) {
          let userResponse = new GetUserDetailsApiResponse();
          userResponse.emailAddress = userInfo.response.usersList[i].emailAddress;
          userResponse.firstName = userInfo.response.usersList[i].firstName;
          userResponse.gender = userInfo.response.usersList[i].gender;
          userResponse.lastName = userInfo.response.usersList[i].lastName;
          userResponse.userId = userInfo.response.usersList[i].userId;
          this.userList.push(userResponse);
        }

        for (var i = 0; i <= userInfo.response.usersList.length - 1; i++) {
          let userResponse = new GetUserDetailsApiResponse();
          userResponse.emailAddress = userInfo.response.usersList[i].emailAddress;
          userResponse.firstName = userInfo.response.usersList[i].firstName;
          userResponse.gender = userInfo.response.usersList[i].gender;
          userResponse.lastName = userInfo.response.usersList[i].lastName;
          userResponse.userId = userInfo.response.usersList[i].userId;
          this.userList.push(userResponse);
        }

        for (var i = 0; i <= userInfo.response.usersList.length - 1; i++) {
          let userResponse = new GetUserDetailsApiResponse();
          userResponse.emailAddress = userInfo.response.usersList[i].emailAddress;
          userResponse.firstName = userInfo.response.usersList[i].firstName;
          userResponse.gender = userInfo.response.usersList[i].gender;
          userResponse.lastName = userInfo.response.usersList[i].lastName;
          userResponse.userId = userInfo.response.usersList[i].userId;
          this.userList.push(userResponse);
        }
      }
    },
      (errorResponse) => {

      },
      () => {

      });
  }

  viewUserDetails(selectedUserId: number) {
    this.displayRightPanel = true;
    this.fetchUserById(selectedUserId);
  }

  fetchUserById(userId: number) {
    let userModel = new GetUserModel();
    userModel.userId = userId;
    this.userService.getUserById(userModel).subscribe((serviceResponse: ServiceResponse<GetUserDetailsApiResponse>) => {
      if (serviceResponse.isValid) {
        this.modelObj = new GetUserDetailsApiResponse();
        this.modelObj.firstName = serviceResponse.response.firstName;
        this.modelObj.lastName = serviceResponse.response.lastName;
        this.modelObj.emailAddress = serviceResponse.response.emailAddress;
      }
      else {
        console.error(serviceResponse.message);
      }
    });
  }
}
