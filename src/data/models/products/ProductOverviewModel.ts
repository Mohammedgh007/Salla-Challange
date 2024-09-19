

/**
 * This model class have three responsibilities: 
 * 1- It represents the overview attributes for a product throughout the project.
 * 2- It deserializes the json map in rest classes.
 * 3- It includes clone() method to handle deep copy
 */
export class ProductOverviewModel {

    id: string;
    title: string;
    price: string;
    priceOriginal: string;
    category: string;
    imageUrl: string;

    constructor(id: string, title: string, price: string,
    priceOriginal: string, category: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.priceOriginal = priceOriginal;
        this.category = category;
        this.imageUrl = imageUrl;
    }


    /**
     * It constructs a model by deserialize a json map.
     * @param json represents the response body after calling json().
     */
    static deserializeJson = (json: any):ProductOverviewModel => {
        return new ProductOverviewModel(
            json.id,
            json.title,
            Number.parseFloat(json.price).toFixed(2),
            ( Number.parseFloat(json.price) * 0.2).toFixed(2),
            json.category,
            json.image
        );
    }


    /**
     * it handles deep copy the class instance.
     * @returns {ProductOverviewModel}
     */
    clone = (): ProductOverviewModel => {
        return new ProductOverviewModel(
            this.id, 
            this.title,
            this.price,
            this.priceOriginal,
            this.category,
            this.imageUrl
        );
    }
}