
/**
 * It serves as an input for ProductRest.searchProducts
 */
export type SearchProductsReqDto = {
    
    pagination: number;
    category?: string;
    isSortingDesc: boolean;


}