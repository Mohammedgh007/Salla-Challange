import { ProductOverviewModel } from "@/models/products/ProductOverviewModel";
import { ProductDetailsModel } from "@/models/products/ProductDetailsModel";
import { ProductsCategoriesModel } from "@/models/products/ProductsCategoriesModel";
import { SearchProductsReqDto } from "@/requestDto/products/SearchProductsReqDto";
import { FetchProductDetailsReqDto } from "@/requestDto/products/FetchProductDetailsReqDto";



/**
 * This interface describes the desired behavior for ProductRest, which is
 * accessing the products rest apis.
 */
export interface IProductRest {

    // It lets the users to search product based on the given sorting, page, and criteria.
    searchProducts(reqDto: SearchProductsReqDto): Promise< Array<ProductOverviewModel> >;

    // It retrieves the list of categories.
    fetchProductsCategories(): Promise<ProductsCategoriesModel>;

    fetchProductDetails(reqDto: FetchProductDetailsReqDto): Promise<ProductDetailsModel>;
}