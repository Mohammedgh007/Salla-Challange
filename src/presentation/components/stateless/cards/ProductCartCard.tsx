import RemoveOrderCounter from "@/Components/containers/orderCounter/RemoveOrderCounter";
import PriceFormatter from "@/Formatters/PriceFormatter";
import { CartProductModel } from "@/models/cart/CartProductModel";



/**
 * It represents the component for a product in a cart.
 * @param {IProductOverviewCardProps} props
 */
export default function ProductCartCard(props: IProductCartCardProps) {
    const hrefStr = `${process.env.NEXT_PUBLIC_WEB_URL}/product-details/${props.productCartModel.title}/${props.productCartModel.id}`
    
    return (
        <li className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
          <a href={hrefStr} className="flex items-start justify-center gap-2 flex-1">
            <img className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden" src={props.productCartModel.imageUrl} alt="Product Thumb" />
            <div className="flex flex-col flex-1 gap-1">
              <h4> {props.productCartModel.title} </h4>
              <div className="flex items-center justify-start gap-2">
                <b className="ltr">x 2</b><span className="text-xs text-gray-500"> {PriceFormatter.formatIntoPriceText(props.productCartModel.price)} </span>
              </div>
            </div>
          </a>

          <RemoveOrderCounter productCartModel={props.productCartModel} initialCount={props.productCartModel.quantity}/>
        </li>
    );
}


interface IProductCartCardProps {
    productCartModel: CartProductModel
}