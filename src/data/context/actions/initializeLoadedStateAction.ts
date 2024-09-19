import { SallaContextState } from "../SallaContextState";
import { IReducerAction } from "./IReducerAction";


/**
 * This class is used to create a reducer action for adding a product to the cart.
 */
export default class initializeLoadedStateAction implements IReducerAction {

    typeName: string = "INIT_STATE";
    payload: SallaContextState;

    static typeName: string = 'INIT_STATE';
    
    constructor(addedProduct: SallaContextState) {
        this.payload = addedProduct;
    }
}