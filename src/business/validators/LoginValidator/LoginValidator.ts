import ILoginValidator from "./ILoginValidator";



/**
 * It handles validating the user inputs for the Login page
 */
export default class LoginValidator implements ILoginValidator {

    /**
     * It validates the username field with returning an error message in case the input is invalid
     * @param username 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     * @return {string} empty string if the input is valid; otherwise, it returns an error message
     */
    validateUsername(username: string, translator: any): string {
        if (username) {
            return ''
        } else {
            return translator('REQUIRED_FIELD_ERROR')
        }
    }


    /**
     * It validates the password field with returning an error message in case the input is invalid
     * @param password 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     * @return {string} empty string if the input is valid; otherwise, it returns an error message
     */
    validatePassword(password: string, translator: any): string {
        if (password) {
            return ''
        } else {
            return translator('REQUIRED_FIELD_ERROR')
        }
    }
    
}