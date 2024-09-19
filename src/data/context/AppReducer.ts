import AddProductAction from "./actions/AddProductAction";
import initializeLoadedStateAction from "./actions/initializeLoadedStateAction";
import { IReducerAction } from "./actions/IReducerAction";
import RemoveProductAction from "./actions/RemoveProductAction";
import { SallaContextState } from "./SallaContextState";
import { CartProductModel } from "@/models/cart/CartProductModel";

export const initialState: SallaContextState = {
    cartProducts: []
}

export const AppReducer = (state: SallaContextState, action: IReducerAction) => {
    switch (action.typeName) {
        case AddProductAction.typeName: 
            return _handleAddCart(state, action);
        case RemoveProductAction.typeName:
            return _handleRemoveCart(state, action)
        case initializeLoadedStateAction.typeName:
            return _handleInitLoadedState(state, action)
    }
};

/**
 * It is a helper function for the below handler methods. It creates a deep copy of the state.
 * @param state the given state to AppReducer
 */
function _getDeepCopyState(state: SallaContextState): SallaContextState {
    const deepCopyCarts = state.cartProducts.map((product) => product.clone());

    return {
        cartProducts: deepCopyCarts
    };
}

/**
 * It is a helper function that returns a new state for the add product action.
 * @param state the given state to AppReducer
 * @param action the given action to AppReducer
 */
function _handleAddCart(state: SallaContextState, action: IReducerAction): SallaContextState {
    const deepCopyState = _getDeepCopyState(state);
    const addedProduct = action.payload as CartProductModel;

    // search for the product; if found increment the count; otherwise appends a new one
    let foundIndex = -1;
    deepCopyState.cartProducts.forEach((cartProduct, index) => {
        if (cartProduct.id == addedProduct.id) {
            foundIndex = index
        }
    })
    if (foundIndex != -1) {
        deepCopyState.cartProducts[foundIndex].quantity = deepCopyState.cartProducts[foundIndex].quantity + addedProduct.quantity
        deepCopyState.cartProducts[foundIndex].addingDate = new Date()
    } else {
        deepCopyState.cartProducts.push(addedProduct.clone());
    }

    return deepCopyState;
}


/**
 * It is a helper function that returns a new state for removing a product from the cart.
 * @param state the given state to AppReducer
 * @param action the given action to AppReducer
 */
function _handleRemoveCart(state: SallaContextState, action: IReducerAction): SallaContextState {
    const targetProductId = action.payload as string;

    const newCartList = state.cartProducts.filter((e) => e.id != targetProductId).map((e) => e.clone());
    
    return {
        cartProducts: newCartList
    }
}


/**
 * It is a helper function that returns a new state for the loaded state.
 * @param state the given state to AppReducer
 * @param action the given action to AppReducer
 */
function _handleInitLoadedState(state: SallaContextState, action: IReducerAction): SallaContextState {
    return _getDeepCopyState(action.payload)
}