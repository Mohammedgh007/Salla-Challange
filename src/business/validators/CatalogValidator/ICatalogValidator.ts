
/**
 * This interface describes the desired behavior for CatalogValidator, which is
 * validating the user inputs in CatalogPage.
 */
export default interface ICatalogValidator {

    /**
     * validates the sorting input
     * @param isSortingDesc 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validateSort(isSortingDesc: boolean, translator: any): string; 

    /**
     * validates the category input
     * @param sortByOption 
     * @param translator should be a function that behaves similarly to i18n.t('key')
     */
    validateCategory(category: string, translator: any): string; 
}