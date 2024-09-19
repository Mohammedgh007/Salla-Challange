

/**
 * This model class have three responsibilities: 
 * 1- It represents the list of available categories throughout the project.
 * 2- It deserializes the json map in rest classes.
 * 3- It includes clone() method to handle deep copy
 */
export class ProductsCategoriesModel {
    
    categoriesList: Array<string>;

    constructor(categories: Array<string>) {
        this.categoriesList = categories;
    }

    /**
     * It constructs a model by deserialize a json map.
     * @param json represents the response body after calling json().
     */
    static deserializeJson = (json: any): ProductsCategoriesModel =>{
        const list: Array<string> = []
        json.forEach((category: string) => {
            list.push(category);
        });

        return new ProductsCategoriesModel(list);
    }


    /**
     * It handles deep copy the class.
     * @returns {ProductsCategoriesModel}
     */
    clone = (): ProductsCategoriesModel => {
        return new ProductsCategoriesModel(this.categoriesList.map((c) => c));
    }
}