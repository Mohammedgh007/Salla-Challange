
/**
 * This model class have two responsibilities: 
 * 1- It represents the details of a product throughout the project.
 * 2- It deserializes and serialize the json map in rest classes.
 * 3- It includes clone() method to handle deep copy
 */
export class CartProductModel {

    id: string;
    title: string;
    price: string;
    quantity: number;
    addingDate: Date; // when exactly is is added.
    imageUrl: string;

    constructor(id: string, title: string, price: string,
    quantity: number, addingDate: Date, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.addingDate = addingDate;
        this.imageUrl = imageUrl;
    }


    /**
     * It constructs a model by deserialize a json map.
     * @param json represents the response body after calling json().
     */
    static deserializeJson = (json: any):CartProductModel => {
        return new CartProductModel(
            json.id,
            json.title,
            Number.parseFloat(json.price).toFixed(2),
            json.quantity,
            json.addingDate,
            json.image
        );
    }


    /**
     * It handles deserializing the object for local storage 
     * @returns {object} object map
     */
    serializeToJson = (): object => {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            quantity: this.quantity,
            addingDate: JSON.stringify(this.addingDate),
            image: this.imageUrl
        };
    }


    /**
     * it handles deep copy the class instance.
     * @returns {CartProductModel}
     */
    clone = (): CartProductModel => {
        return new CartProductModel(
            this.id, 
            this.title,
            this.price,
            this.quantity,
            this.addingDate,
            this.imageUrl
        );
    }
}