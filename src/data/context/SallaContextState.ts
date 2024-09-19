import { CartProductModel } from "@/models/cart/CartProductModel"

/**
 * It represents the fields stored with the app context.
 */
export type SallaContextState = {
    cartProducts: Array<CartProductModel>
}