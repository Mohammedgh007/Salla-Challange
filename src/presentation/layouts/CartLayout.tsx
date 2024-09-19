'use client';

import RemoveOrderCounter from "@/Components/containers/orderCounter/RemoveOrderCounter";
import PrimaryFillBtn from "@/Components/stateless/buttons/PrimaryFillBtn";
import ProductCartCard from "@/Components/stateless/cards/ProductCartCard";
import { useAppContext } from "@/context/AppContext";
import PriceFormatter from "@/Formatters/PriceFormatter";
import { useTranslations } from "next-intl";
import React from "react";

/**
 * It coordinates between the components and the page's props for the cart page.
 */
export default function CartLayout() {
    const t = useTranslations('');
    const { state, dispatch } = useAppContext()
    
    let totalPrice = 0;
    state.cartProducts.forEach( (e) => {totalPrice += Number.parseFloat(e.price)})

    return (
        <main className="w-full main flex-auto">
            <div className="container">
                <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
                    
                    <div className="flex flex-col mb-6">
                        <h2 className="text-lg flex items-center justify-start gap-2"> {t('CART')} </h2>
                    </div>

                    <ul className="flex flex-col">
                        {state.cartProducts.map((e, i) => <ProductCartCard  key={`cart-item-${i}`} productCartModel={e}/>)}

                        {(state.cartProducts.length == 0) && <h2> {t('EMPTY_CART')} </h2>}
                    </ul>

                    <div className="flex items-center justify-between px-4 py-8 border-gray-100 border-t border-b-1">
                        <h3 className="font-bold text-xl"> {t("TOTAL_PRICE")} </h3>
                        <span className="text-xl font-bold"> {PriceFormatter.formatIntoPriceText(totalPrice.toFixed(2))} </span>
                    </div>

                    <PrimaryFillBtn btnText={t('CHECKOUT')} HandleClick={() => {}} />
                        
                </div>
            </div>
        </main>
    );
}