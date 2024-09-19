import { IProductRest } from "@/rest/ProductRest/IProductRest";
import ICatalogValidator from "@/validators/CatalogValidator/ICatalogValidator";

import ProductRest from "@/rest/ProductRest/ProductRest";
import RequestsHelper from "@/rest/RequestHelper/RequestHelper";
import CatalogValidator from "@/validators/CatalogValidator/CatalogValidator";
import { ISallaAppStateStorage } from "../infastructure/storage/SallaAppStateSorage/ISallaAppStateStorage";
import SallaAppStateStorage from "../infastructure/storage/SallaAppStateSorage/SallaAppStateStorage";
import ILoginValidator from "@/validators/LoginValidator/ILoginValidator";
import LoginValidator from "@/validators/LoginValidator/LoginValidator";
import { IAuthenticationRest } from "@/rest/AuthenticationRest/IAuthenticationRest";
import AuthenticationRest from "@/rest/AuthenticationRest/AuthenticationRest";



/**
 * This class handles returning concrete class implementation for deployed code.
 */
export class SrcDIHandler {

    /**
     * It helps injection of IProductRest
     * @returns {IProductRest}
     */
    static getProductRestInstance(): IProductRest {
        return new ProductRest(new RequestsHelper())
    }

    /**
     * It helps injection of ICatalogValidator
     * @returns {ICatalogValidator}
     */
    static getCatalogValidatorInstance(): ICatalogValidator {
        return new CatalogValidator();
    }


    /**
     * It helps injecting of ISallaAppStateStorage
     * @returns {ISallaAppStateStorage}
     */
    static getSallaAppStateStorageInstance(): ISallaAppStateStorage {
        return new SallaAppStateStorage();
    }


    /**
     * It helps injecting of ILoginValidator
     * @returns {ILoginValidator}
     */
    static getLoginValidatorInstance(): ILoginValidator {
        return new LoginValidator()
    }


    /**
     * It helps injecting of IAuthenticationRest
     * @returns {IAuthenticationRest}
     */
    static getAuthenticationRestInstance(): IAuthenticationRest {
        return new AuthenticationRest(new RequestsHelper());
    }
}