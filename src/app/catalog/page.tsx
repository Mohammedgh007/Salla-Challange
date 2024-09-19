"use client";

import { DICoordinator } from "@/DICoordinator";
import { SearchProductsReqDto } from "@/requestDto/products/SearchProductsReqDto";
import CatalogLayout from "@/Layouts/CatalogLayout";
import CatalogValidator from "@/validators/CatalogValidator/CatalogValidator";
import { ProductOverviewModel } from "@/models/products/ProductOverviewModel";
import { useEffect, useState } from "react";
import { ProductsCategoriesModel } from "@/models/products/ProductsCategoriesModel";
import Loading from "@/Components/stateless/Loading";



const productsRest = DICoordinator.getProductRestInstance(); // Dependency injection
const catalogValidator = DICoordinator.getCatalogValidatorInstance(); // Dependency injection

/**
 * It coordinating between the presentation layer and the rest of layers for the catalog page.
 */
export default function Catalog(){
    const [ initialProducts, setInitialProducts ] = useState<Array<ProductOverviewModel>>([]);
    const [ categories, setCategories ] = useState<ProductsCategoriesModel>(new ProductsCategoriesModel([]))
    const [ hasInitialize, setHasInitialize ] = useState(false);

    useEffect(() => {
        const dto: SearchProductsReqDto = {
            pagination: 0,
            isSortingDesc: true
        }
        Promise.all([
            productsRest.searchProducts(dto),
            productsRest.fetchProductsCategories()
        ]).then((results) => {
            setInitialProducts(results[0]);
            setCategories(results[1]);
            setHasInitialize(true)
        })
    }, [])

    const loadProducts = async (dto: SearchProductsReqDto): Promise<{products: Array<ProductOverviewModel>, hasNextPage: boolean}> => {
        const products = await productsRest.searchProducts(dto);

        return {
            products, 
            hasNextPage: products.length % 8 == 0
        };
    };

    const props = {
        initialProducts: initialProducts,
        categories: categories,
        loadProducts: loadProducts,
        validator: catalogValidator
    };

    return (hasInitialize) 
        ? <CatalogLayout {...props} />
        : <Loading/>;
}

