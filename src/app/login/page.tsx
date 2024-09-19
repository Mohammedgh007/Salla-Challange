'use client';

import { DICoordinator } from "@/DICoordinator";
import LoginLayout from "@/Layouts/LoginLayout";
import { LoginReqDto } from "@/requestDto/LoginReqDto";


const loginValidator = DICoordinator.getLoginValidatorInstance() // Dependency Injection
const authenticationRest = DICoordinator.getAuthenticationRestInstance() // // Dependency Injection

/**
 * It coordinating between the presentation layer and the rest of layers for the login page.
 */
export default function Login() { 
    
    // @throws InvalidCredentialsException
    const handleSignIn = async (username: string, password: string) => {
        const loginReqDto: LoginReqDto = {
            username,
            password
        }
        await authenticationRest.loginUser(loginReqDto) // return authToken
        // store auth token for authenticated request.
    }

    return (
        <LoginLayout 
            validator={loginValidator}
            handleSignIn={handleSignIn}
        />
    );
}