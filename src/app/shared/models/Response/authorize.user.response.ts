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



