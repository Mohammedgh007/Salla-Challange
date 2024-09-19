
import { ProductOverviewModel } from "@/models/products/ProductOverviewModel";
import PriceFormatter from "@/Formatters/PriceFormatter";
import PrimaryOutlinedBtn from "../buttons/PrimaryOutlinedBtn";
import { useTranslations } from "next-intl";
import Link from "next/link";


/**
 * It represents the component for a search result product.
 * @param {IProductOverviewCardProps} props
 */
export default function ProductOverviewCard(props: IProductOverviewCardProps) {
    const t = useTranslations('');
    const hrefStr = `${process.env.NEXT_PUBLIC_WEB_URL}/product-details/${props.productOverviewModel.title}/${props.productOverviewModel.id}`
    
    return(
        <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
          <Link className="block w-full relative mb-4" href={hrefStr}>
            <img src={props.productOverviewModel.imageUrl} className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
          </Link>

          <div className="w-full flex flex-col flex-1 items-center justify-start gap-4">
            <div className="flex items-center justify-center flex-col gap-1">
              <Link href={hrefStr} className="block w-full text-primary text-center">
                <h2 className="text-sm">{props.productOverviewModel.title}</h2>
              </Link>
              <small className="block text-xs w-full text-center">{props.productOverviewModel.category}</small>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
            <span className="font-medium text-md">{PriceFormatter.formatIntoPriceText(props.productOverviewModel.price)}</span>
            <span className="font-medium text-sm line-through text-gray-300">{PriceFormatter.formatIntoPriceText(props.productOverviewModel.priceOriginal)}</span>
          </div>

          <PrimaryOutlinedBtn btnText={t('ADD_TO_CART')} HandleClick={() => props.handleClickAddToCart(props.productOverviewModel)}/>
        </div>
    );
}


interface IProductOverviewCardProps {
    productOverviewModel: ProductOverviewModel,
    handleClickAddToCart(productOverviewModel: ProductOverviewModel): void 
}