import LoginForm from "@/Components/containers/forms/LoginForm";
import LoginBannerBranding from "@/Components/stateless/branding/LoginBannerBranding";
import ILoginValidator from "@/validators/LoginValidator/ILoginValidator";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Loading from "@/Components/stateless/Loading";


/**
 * It coordinates between the components and the page's props for the login page.
 */
export default function LoginLayout(props: ILoginLayoutProps) {
    const [ isLoading, setIsLoading ] = useState(false)
    const t = useTranslations()

    const handleSignIn = async (username: string, password:string) => {
        setIsLoading(true)
        
        await props.handleSignIn(username, password).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <main className="w-full main flex-auto">
             <div className="container">
                <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl flex flex-row flex-wrap">

                    {/* Sign in form */}
                    <div className="flex flex-col justify-center w-half-responsive">

                        <div className="mb-6">
                            <h2 className="text-lg">{ t('LOGIN_LAYOUT_FORM_TITLE') }</h2>
                            <span className="text-xs text-gray-500"> { t('LOGIN_LAYOUT_FORM_SUBTITLE') } </span>
                        </div>

                        <LoginForm 
                            validator={props.validator}
                            handleSignIn={handleSignIn}
                        />
                    </div>

                    <LoginBannerBranding />

                    {isLoading && <Loading/>}

                </div>
             </div>
        </main>
    );
}


interface ILoginLayoutProps {
    validator: ILoginValidator
    handleSignIn(username: string, password:string): Promise<void>
}