import { LoginReqDto } from "@/requestDto/LoginReqDto";
import { IAuthenticationRest } from "./IAuthenticationRest";
import { IRequestHelper } from "../RequestHelper/IRequestHelper";



export default class AuthenticationRest implements IAuthenticationRest {

    _requests: IRequestHelper;

    constructor(requestHelper: IRequestHelper) {
        this._requests = requestHelper;
    }
    

    /**
     * It lets the use to sign in and get the auth token.
     * @param reqDto 
     * @returns {String} authToken
     * @throws InvalidCredentialsException
     */
    async loginUser(reqDto: LoginReqDto): Promise<string> {
        try {
            // setup url 
            const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`
            const body = {
                username: reqDto.username,
                password: reqDto.password
            }

            // send request
            const response = await this._requests.postData(url, body)
            return response.token
        } catch (e) { 
            throw e
        }
    }
    
}