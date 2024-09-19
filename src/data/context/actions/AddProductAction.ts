import { CartProductModel } from "@/models/cart/CartProductModel";
import { IReducerAction } from "./IReducerAction";


/**
 * This class is used to create a reducer action for adding a product to the cart.
 */
export default class AddProductAction implements IReducerAction {

    typeName: string = "ADD_PRODUCT";
    payload: CartProductModel;

    static typeName: string = 'ADD_PRODUCT';
    
    constructor(addedProduct: CartProductModel) {
        this.payload = addedProduct;
    }
}