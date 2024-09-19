import { IReducerAction } from "./IReducerAction";


/**
 * This class is used to create a reducer action for removing a product from the cart.
 */
export default class RemoveProductAction implements IReducerAction {

    typeName: string = "REMOVE_PRODUCT";
    payload: string;

    static typeName: string = 'REMOVE_PRODUCT';
    
    constructor(removedProductId: string) {
        this.payload = removedProductId;
    }
}