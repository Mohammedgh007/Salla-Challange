'use client';

import { ProductOverviewModel } from "@/models/products/ProductOverviewModel";
import { ProductsCategoriesModel } from "@/models/products/ProductsCategoriesModel";
import { useState } from "react";
import CatalogBannerBranding from "@/Components/stateless/branding/CatalogBannerBranding";
import ProductOverviewCard from "@/Components/stateless/cards/ProductOverviewCard";
import PrimaryFillBtn from "@/Components/stateless/buttons/PrimaryFillBtn";
import { useTranslations } from "next-intl";
import { SearchProductsReqDto } from "@/requestDto/products/SearchProductsReqDto";
import ICatalogValidator from "@/validators/CatalogValidator/ICatalogValidator";
import SearchProductsForm from "@/Components/containers/forms/SearchProductsForm";
import Loading from "@/Components/stateless/Loading";
import AddProductAction from "@/context/actions/AddProductAction";
import { CartProductModel } from "@/models/cart/CartProductModel";
import { useAppContext } from "@/context/AppContext";


/**
 * It coordinates between the components and the page's props for the catalog page.
 */
export default function CatalogLayout(props: ICataloLayoutProps) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ products, setProducts ] = useState(props.initialProducts);
    const [ pagination, setPagination ] = useState(0);
    const [ hasNextPage, setHasNextPage ] = useState(true);
    const [ categoryFilter, setCategoryFilter ] = useState('');
    const [ isSortingDesc, setIsSortingDesc ] = useState(true);
    const { dispatch } = useAppContext();
    
    const handleClickLoadMore = async () => { 
        setIsLoading(true);
        const dto: SearchProductsReqDto = {
            pagination: pagination + 1,
            isSortingDesc: isSortingDesc,
            category: categoryFilter
        }

        const result = await props.loadProducts(dto)
        setIsLoading(false)
        setHasNextPage(result.hasNextPage)
        setProducts(result.products)
        setPagination(pagination + 1)
    }

    const handleSubmitSearch = async (selectedCategory: string, selectedIsSortingDesc: boolean) => { 
        setIsLoading(true);
        const dto: SearchProductsReqDto = {
            pagination: 0,
            isSortingDesc: selectedIsSortingDesc,
            category: selectedCategory
        }

        const result = await props.loadProducts(dto)
        setIsLoading(false)
        setHasNextPage(result.hasNextPage)
        setProducts(result.products)
        setPagination(0)
        setCategoryFilter(selectedCategory)
        setIsSortingDesc(selectedIsSortingDesc)

        return '' // no error
    }


    const handleClickAddToCart = (addedProduct: ProductOverviewModel) => {
        const addProductAction = new AddProductAction(new CartProductModel(addedProduct.id, 
            addedProduct.title, addedProduct.price, 1, new Date(), addedProduct.imageUrl))
        dispatch(addProductAction)
    }
    
    const t = useTranslations('');
    return (
        <main className="w-full main flex-auto">
            <div className="container">
                <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">

                    {(isLoading) && <Loading/>}

                    <CatalogBannerBranding />

                    <div className="flex items-center justify-between gap-4 mb-4">
                        <SearchProductsForm 
                            validator={props.validator}
                            categories={props.categories}
                            submitForm={handleSubmitSearch}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-1 sm:gap-4">
                        {products.map((product, index) => 
                            <ProductOverviewCard 
                                key={`productId${product.id}INDEX${index}`}
                                productOverviewModel={product}
                                handleClickAddToCart={handleClickAddToCart}
                            />
                        )}
                    </div>

                    <div className="flex flex-row justify-center my-4"> 
                        <div className='load-more-width'>
                            {(products.length == 0) && 
                                <h3 className="text-center">{t('NO_PRODUCTS')}</h3> 
                            } {/* No results text */}

                            {(hasNextPage && products.length != 0) && 
                                <PrimaryFillBtn btnText={t('LOAD_MORE')} HandleClick={handleClickLoadMore}/>
                            } {/* Load More button */}

                            {(!hasNextPage && products.length != 0) &&
                                <h3 className="text-center">{t('END_OF_PRODUCTS')}</h3>
                            } {/* end of results text */}
                        </div>
                        
                    </div>

                </div>
            </div>
        </main>
    );

}


interface ICataloLayoutProps {
    initialProducts: Array<ProductOverviewModel>;
    categories: ProductsCategoriesModel;
    loadProducts(dto: SearchProductsReqDto): Promise<{products: Array<ProductOverviewModel>, hasNextPage: boolean}>,
    validator: ICatalogValidator
}