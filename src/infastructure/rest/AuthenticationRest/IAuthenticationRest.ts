import { LoginReqDto } from "@/requestDto/LoginReqDto";


/**
 * This interface describes the desired behavior for AuthenticationRest, which is
 * accessing the login rest api.
 */
export interface IAuthenticationRest {

    // It lets the user to login by obtaining the auth token
    loginUser(reqDto: LoginReqDto): Promise<string>;
}