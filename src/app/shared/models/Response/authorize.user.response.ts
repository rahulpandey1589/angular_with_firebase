export class User{
    constructor(public email:string,
        public id:string,
        private _token:string,
        private _tokenExpirationDate:Date)
        {}


  getToken(){
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
        return null;
    }
    return this._token;
 }
}


export interface AuthorizeUser{
    kind:string;
    localId:string;
    email:string;
    displayName:string;
    idToken:string;
    registered:boolean;
    refreshToken:string;
    expiresIn:string;
}

export interface AuthorizeUserErrorResponse {
    error: AuthorizeUserError;
}

export interface AuthorizeUserError {
    code: number;
    message: string;
    errors: Error[];
}

export interface Error {
    message: string;
    domain: string;
    reason: string;
}



