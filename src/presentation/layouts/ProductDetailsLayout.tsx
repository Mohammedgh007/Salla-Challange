
import { ProductDetailsModel } from "@/models/products/ProductDetailsModel";
import AddOrderCounter from "@/Components/containers/orderCounter/AddOrderCounter";
import PriceFormatter from "@/Formatters/PriceFormatter";



/**
 * It coordinates between the components and the page's props for the catalog page.
 */
export default function ProductDetailsLayout(props: IProductDetailsLayoutProps) {

    return (
        <main className="w-full main flex-auto">
            <div className="container">
                <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                        <img src={props.productDetailsModel.imageUrl} className="w-full aspect-4/3 object-cover rounded-lg mb-8 sm:mb-0" alt="product img" />

                        <div className="flex flex-col gap-4 col-span-2">
                            <article className="text-sm text-darker-300 leading-[1.8] "> {/* Product details */}
                                
                                <div className="flx flex-col mb-6 gap-2"> {/* Product Name And category */}
                                    <h1 className="text-xl md:text-3xl"> {props.productDetailsModel.title} </h1>
                                    <small className="text-xs text-gray-500"> {props.productDetailsModel.category} </small>
                                </div>

                                <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2"> {/* Price */}
                                    <span className="font-medium text-md"> {PriceFormatter.formatIntoPriceText(props.productDetailsModel.price)} </span>
                                    <span className="font-medium text-sm line-through text-gray-300"> {PriceFormatter.formatIntoPriceText(props.productDetailsModel.priceOriginal)} </span>
                                </div>

                                <p> {props.productDetailsModel.description} </p>
                            </article>

                            <div className="flex items-center justify-center gap-4"> {/* Selection section */}
                                <AddOrderCounter 
                                    productId={props.productDetailsModel.id}
                                    title={props.productDetailsModel.title}
                                    imageUrl={props.productDetailsModel.imageUrl}
                                    price={props.productDetailsModel.price}
                                />
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>
        </main>
    );
}



interface IProductDetailsLayoutProps {
    productDetailsModel: ProductDetailsModel
}