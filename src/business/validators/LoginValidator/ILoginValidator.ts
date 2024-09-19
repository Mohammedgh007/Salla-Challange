
/**
 * This interface describes the desired behavior for LoginValidator, which is
 * validating the user inputs in LoginPage.
 */
export default interface ILoginValidator {

    /**
     * validates the username input
     * @param username 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validateUsername(username: string, translator: any): string; 

    /**
     * validates the password input
     * @param password 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validatePassword(password: string, translator: any): string; 
}