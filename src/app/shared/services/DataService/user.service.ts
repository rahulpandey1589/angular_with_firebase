import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';;
import {map, concat} from 'rxjs/operators';

import { UserRegistrationRequestModel } from '../../models/Request/UserRegistrationModel';
import { GlobalConfigurationModel } from '../../models/globalconfigModel';
import { GetUserModel } from '../../models/Request/GetUserModel';
import { ServiceResponse } from '../../models/Response/service.response';
import { GetUserDetailsApiResponse, UserDetailsApiResponse } from 'src/app/shared/models/Response/GetUserDetailsApiResponse';

@Injectable()
export class UserService {
    constructor(private _http: HttpClient) {
    }

    registerUser(param: UserRegistrationRequestModel) {
        let url = GlobalConfigurationModel.UserServiceBaseURL + "/updateUser";
        let body = JSON.stringify(param);
        return this._http.put(url,body).pipe(map(response => response));
    }


    getUserById(param:GetUserModel):Observable<ServiceResponse<GetUserDetailsApiResponse>>{
        let url= GlobalConfigurationModel.UserServiceBaseURL+ "/getUserInfoById?userId="+ param.userId;
        return this._http.get(url).pipe(map((response:ServiceResponse<GetUserDetailsApiResponse>) => response));
    }

    getAllUsers():Observable<ServiceResponse<UserDetailsApiResponse>>{
        let url= GlobalConfigurationModel.UserServiceBaseURL+ "/getAllUsers";
        return this._http.get(url).pipe(map((response:ServiceResponse<UserDetailsApiResponse>) => response));
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }
}