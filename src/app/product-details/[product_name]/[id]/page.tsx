'use server';
import { DICoordinator } from "@/DICoordinator";
import { FetchProductDetailsReqDto } from "@/requestDto/products/FetchProductDetailsReqDto";
import ProductDetailsLayout from "@/Layouts/ProductDetailsLayout";
import { Metadata } from "next";




const productsRest = DICoordinator.getProductRestInstance(); // Dependency injection

/**
 * It coordinating between the presentation layer and the rest of layers for the product details page.
 */
export default async function ProductDetails({ params }: ProductDetailsParams){
    const productId =  params.id as string;
    const dto: FetchProductDetailsReqDto = {
        productId: productId,
    }
    const product = await productsRest.fetchProductDetails(dto);
    
    return (
        <ProductDetailsLayout 
            productDetailsModel={product}
        />
    );
}


type ProductDetailsParams = {
    params: {id: string},
};

export async function generateMetadata({ params }: ProductDetailsParams): Promise<Metadata> {
    const productId =  params.id;
    const dto: FetchProductDetailsReqDto = {
        productId: productId,
    }
    const product = await productsRest.fetchProductDetails(dto);
    const title = "تفاصيل المنتج #".replace("#", product.title)
    
    return {
      title: title,
      description: product.description
    }
}