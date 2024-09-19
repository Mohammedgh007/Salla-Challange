import { SallaContextState } from "@/context/SallaContextState";
import { ISallaAppStateStorage } from "./ISallaAppStateStorage";
import { CartProductModel } from "@/models/cart/CartProductModel";
import { SaveStateReqDto } from "@/requestDto/SaveStateReqDto";


/**
 * It facilities accessing the local storage data for AppContext
 */
export default class SallaAppStateStorage implements ISallaAppStateStorage {


    /**
     * It handles serializing and saving the state in the local storage
     * @param state 
     */
    saveState(reqDto: SaveStateReqDto): void {
        try {
            const  serializedArr = JSON.stringify(reqDto.state.cartProducts.map((e) => e.serializeToJson()))
            localStorage.setItem('state[products-cart]', serializedArr)
        } catch(e) { // empty storage when it is full
            localStorage.clear();
            
        }
    }


    /**
     * It handles loading and deserilization the stored state.
     */
    loadState(): SallaContextState {
        try {
            const serializedCart = JSON.parse(localStorage.getItem("state[products-cart]") || '');
            const deserializedCart = serializedCart.map((json: string) => CartProductModel.deserializeJson(json))
            const loadedState: SallaContextState = {
                cartProducts: deserializedCart
            }
        return loadedState
        } catch(e) { // empty storage when it is full
            localStorage.clear();

            return {
                cartProducts: []
            }
        }
    }


    /**
     * It checks if there is a saved state in local storage.
     */
    hasSavedState(): boolean {
        return Boolean(localStorage.getItem("state[products-cart]"))
    }
    
}