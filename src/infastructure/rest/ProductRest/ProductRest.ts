import { SearchProductsReqDto } from "@/requestDto/products/SearchProductsReqDto";
import RequestsHelper from "../RequestHelper/RequestHelper";
import { IRequestHelper } from "../RequestHelper/IRequestHelper";
import { IProductRest } from "./IProductRest";
import { ProductOverviewModel } from "@/models/products/ProductOverviewModel";
import { ProductDetailsModel } from "@/models/products/ProductDetailsModel";
import { ProductsCategoriesModel } from "@/models/products/ProductsCategoriesModel";
import { FetchProductDetailsReqDto } from "@/requestDto/products/FetchProductDetailsReqDto";


export default class ProductRest implements IProductRest{

    _requests: IRequestHelper;

    constructor(requestHelper: IRequestHelper) {
        this._requests = requestHelper;
    }


     /**
     * It lets the users to search product based on the given sorting, page, and criteria.
     * @param {SearchProductsReqDto} reqDto stores the fields of the requests
     */
     searchProducts = async(reqDto: SearchProductsReqDto): Promise< Array<ProductOverviewModel> > => {
        try { 
            // setup url 
            const url = (reqDto.category) 
                ? new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${reqDto.category}`)
                : new URL(`${process.env.NEXT_PUBLIC_API_URL}/products`)
            const query = {
                limit: (reqDto.pagination  + 1)* 8,
                sort: (reqDto.isSortingDesc) ? 'desc' : 'asc'
            };

            // send request
            const response = await this._requests.getData(url.href, query);
            const products = response.map((product: any) => ProductOverviewModel.deserializeJson(product))
            return products;
        } catch(e) { 
            throw e
        }
    }


    /**
     * It lets the users to list all products categories.
     */
    fetchProductsCategories = async (): Promise<ProductsCategoriesModel> => {
        try {
            // setup url 
            const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/categories`)

            // send request
            const response = await this._requests.getData(url.href, {});
            return ProductsCategoriesModel.deserializeJson(response);
        } catch (e) { 
            throw e
        }
    }


    /**
     * It lets the users to fetch a specific product details.
     * @param {FetchProductDetailsReqDto} reqDto stores the fields of the requests
     */
    fetchProductDetails = async(reqDto: FetchProductDetailsReqDto): Promise<ProductDetailsModel> =>{
        try {
            // setup url 
            const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/${reqDto.productId}`)

            // send request
            const response = await this._requests.getData(url.href, {});
            return ProductDetailsModel.deserializeJson(response);
        } catch(e) { 
            throw e
        }
    }

}