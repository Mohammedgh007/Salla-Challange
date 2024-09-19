'use client';

import PrimaryFillBtn from "@/Components/stateless/buttons/PrimaryFillBtn";
import React, { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { useAppContext } from "@/context/AppContext";
import AddProductAction from "@/context/actions/AddProductAction";
import { CartProductModel } from "@/models/cart/CartProductModel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/**
 * It renders the increment and decrement counter with add to cart button.
 * @param { IAddOrderCounterProps } props 
 * @returns 
 */
export default function AddOrderCounter(props: IAddOrderCounterProps) {
    const { state, dispatch } = useAppContext();
    const [ count, setCount ] = useState(0);

    const t = useTranslations('');
    const handleClickAddToCart = () => {
        if (count != 0) {
            const action = new AddProductAction(new CartProductModel(props.productId, 
                props.title, props.price, 
                count, new Date(), props.imageUrl))
            dispatch(action)
        } else {
            toast(t('INCREMENT_THE_COUNT_MSG'));
        }
    }

    const changeIncrementCount = () => setCount(count + 1)
    const changeDecrementCount = () => setCount((count != 0) ? count - 1 : 0)
    const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => setCount(_dismissNegatives(event.target.value))

    return (
        <Fragment>
            <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
                <button onClick={changeIncrementCount} className="shrink-0 px-2 text-md text-gray-500">+</button>
                <input type="number" onChange={changeCount} value={count} className="w-[50px] flex-1 text-center appearance-none bg-transparent" />
                <button onClick={changeDecrementCount} className="shrink-0 px-2 text-md text-gray-500">-</button>
            </div>

            <ToastContainer 
                hideProgressBar={true}
                autoClose={1000}
                position="top-center"
            />

           <PrimaryFillBtn btnText={t('ADD_TO_CART')} HandleClick={handleClickAddToCart}/>
        </Fragment>
    );
}


/**
 * It is a helper function that converts the string into number with dismissing the negative sign.
 * @param number 
 */
const _dismissNegatives = (number: string): number => {
    try {
        const newCount = Number.parseInt(number)
        return (newCount > -1) ? newCount : 0
    } catch(e) {
        return 0;
    }
}


interface IAddOrderCounterProps {
    productId: string,
    title: string, 
    price: string, 
    imageUrl: string
}