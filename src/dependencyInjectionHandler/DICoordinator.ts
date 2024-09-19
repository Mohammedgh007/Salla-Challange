import { IProductRest } from "@/rest/ProductRest/IProductRest";
import ICatalogValidator from "@/validators/CatalogValidator/ICatalogValidator";

import { SrcDIHandler } from "./SrcDIHandler";

import ProductRest from "@/rest/ProductRest/ProductRest";
import RequestsHelper from "@/rest/RequestHelper/RequestHelper";
import { ISallaAppStateStorage } from "../infastructure/storage/SallaAppStateSorage/ISallaAppStateStorage";
import ILoginValidator from "@/validators/LoginValidator/ILoginValidator";
import { IAuthenticationRest } from "@/rest/AuthenticationRest/IAuthenticationRest";

/**
 * Since Next does not support Dependency Injection out of the box for page.tsx files, the class helps establishing
 * dependency injection by determining whether to inject a testing/dummy class for unit testing
 * or an actual source code that will be built and deployed. 
 * @Note that this whole setup is intended to 
 * achieve clean architecture and more importantly unit testing, so it is possible to include a third
 * handler for whatever reason, and we can include an interface instance instead of isModeTesting to facilitate selecting 
 * many other dependency injectors, but I used this simple way to save time and finish the task on time.
 * @preCondition this class needs SrcDIHandler to return the concrete class for source implementation
 * @preCondition this class needs TestingDIHandler to return concrete class for unit testing purposes.
 * @preCondition all methods must be called after initialize().
 */
export class DICoordinator {

    static isModeTesting: boolean;


    static initialize(isModeTesting: boolean) {
        DICoordinator.isModeTesting = isModeTesting;
    }


    /**
     * It helps injection IProductRest
     * @returns {IProductRest}
     */
    static getProductRestInstance(): IProductRest {
        return (DICoordinator.isModeTesting ) 
            ? new ProductRest(new RequestsHelper())
            : SrcDIHandler.getProductRestInstance();
    }

    /**
     * It helps injection ICatalogValidator
     * @returns {IProductRest}
     */
    static getCatalogValidatorInstance(): ICatalogValidator {
        return (DICoordinator.isModeTesting ) 
            ? SrcDIHandler.getCatalogValidatorInstance()
            : SrcDIHandler.getCatalogValidatorInstance();
    }


    /**
     * It helps injecting of ISallaAppStateStorage.
     * @returns {ISallaAppStateStorage}
     */
    static getSallaAppStateStorageInstance(): ISallaAppStateStorage {
        return (DICoordinator.isModeTesting ) 
            ? SrcDIHandler.getSallaAppStateStorageInstance()
            : SrcDIHandler.getSallaAppStateStorageInstance();
    }


    /**
     * It helps injecting of ILoginValidator.
     * @returns {ILoginValidator}
     */
    static getLoginValidatorInstance(): ILoginValidator {
        return (DICoordinator.isModeTesting) 
            ? SrcDIHandler.getLoginValidatorInstance()
            : SrcDIHandler.getLoginValidatorInstance();
    }


    /**
     * It helps injecting of IAuthenticationRest.
     * @returns {IAuthenticationRest}
     */
    static getAuthenticationRestInstance(): IAuthenticationRest {
        return (DICoordinator.isModeTesting) 
            ? SrcDIHandler.getAuthenticationRestInstance()
            : SrcDIHandler.getAuthenticationRestInstance();
    }
}