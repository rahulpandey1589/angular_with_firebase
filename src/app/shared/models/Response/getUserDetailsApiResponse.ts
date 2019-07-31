export class GetUserDetailsApiResponse{
    firstName:string;
    lastName:string;
    emailAddress:string;
    gender:string;
    userId:number;
}

export class UserDetailsApiResponse{
    usersList:GetUserDetailsApiResponse[]
}