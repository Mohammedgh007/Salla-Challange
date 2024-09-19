import ICatalogValidator from "./ICatalogValidator"


/**
 * It handles validating the user inputs in the program search page.
 */
export default class CatalogValidator implements ICatalogValidator {

    
    /**
     * validates the sorting input
     * @param isSortingDesc 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validateSort(): string {
        return ''
    }

    /**
     * validates the category input
     * @param sortByOption 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validateCategory(): string {
        return ''
    }

}