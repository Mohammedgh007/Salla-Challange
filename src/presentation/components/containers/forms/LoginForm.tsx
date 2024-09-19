import PrimaryFillBtn from "@/Components/stateless/buttons/PrimaryFillBtn";
import PrimaryOutlinedBtn from "@/Components/stateless/buttons/PrimaryOutlinedBtn";
import PrimaryTextBtn from "@/Components/stateless/buttons/PrimaryTextBtn";
import TextFieldInput from "@/Components/stateless/inputs/TextFieldInput";
import InvalidCredentialsException from "@/exceptions/InvalidCredentialsException";
import ILoginValidator from "@/validators/LoginValidator/ILoginValidator";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




/**
 * It renders the login form for LoginLayout to render and to validate the login credentials.
 */
export default function LoginForm(props: ILoginFormProps) {
    const [ username, setUsername ] = useState('')
    const [ usernameErrorMsg, setUsernameErrorMsg ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordErrorMsg, setPasswordErrorMsg ] = useState('')
    const router = useRouter()
    const t = useTranslations('')

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const errorMsg = props.validator.validateUsername(event.target.value, t)
        setUsername(event.target.value)
        setUsernameErrorMsg(errorMsg)
    }
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const errorMsg = props.validator.validatePassword(event.target.value, t)
        setPassword(event.target.value)
        setPasswordErrorMsg(errorMsg)
    }

    const handleSubmitForm = async () => {
        if (!Boolean(usernameErrorMsg) && !Boolean(passwordErrorMsg)) {
            try {
                await props.handleSignIn(username, password) 
                toast( t('LOGIN_FORM_SUCCESS_MSG') )
                setTimeout(() => { 
                    router.replace(`${process.env.NEXT_PUBLIC_WEB_URL}/catalog`)
                 }, 2000)
            } catch (e) { 
                if (e instanceof InvalidCredentialsException) {
                    toast.error( t('INVALID_CREDENTIALS_ERROR') )
                   
                }
            }
        }
    }

    return (
        <div className="my-4">

            <div className="" style={{marginTop: "5%", marginBottom: "10%"}}>
                <div className="my-4">
                    <TextFieldInput 
                        labelText={t('LOGIN_FORM_USERNAME_LABEL')} 
                        placeHolderText={t('LOGIN_FORM_USERNAME_LABEL')} 
                        value={username} 
                        errorMsg={usernameErrorMsg}
                        handleOnChange={handleChangeUsername}
                    />
                </div>

                <div className="my-4">
                    <TextFieldInput 
                        labelText={t('LOGIN_FORM_PASSWORD_LABEL')} 
                        placeHolderText={t('LOGIN_FORM_PASSWORD_LABEL')} 
                        value={password} 
                        errorMsg={passwordErrorMsg}
                        handleOnChange={handleChangePassword}
                    />
                </div>
            </div>

            <div className="my-4">

                <div className="my-4">
                    <PrimaryFillBtn btnText={t('LOGIN_FORM_LOGIN_BTN')} HandleClick={handleSubmitForm}/>
                </div>

                <div className="my-4">
                    <PrimaryOutlinedBtn btnText={t('LOGIN_FORM_REGISTER_BTN')} HandleClick={() => {}}/>
                </div>

                <div className="my-4 w-full text-center">
                    <PrimaryTextBtn btnText={t('LOGIN_FORM_Forgot_BTN')} HandleClick={() => {}}/>
                </div>

            </div>

            <ToastContainer 
                hideProgressBar={true}
                theme="colored"
                autoClose={4000}
                position="top-center"
            />
        </div>
    );
}


interface ILoginFormProps {
    validator: ILoginValidator
    handleSignIn(username: string, password:string): Promise<void>
}