'use client';

import React, { Fragment, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { CartProductModel } from "@/models/cart/CartProductModel";
import 'react-toastify/dist/ReactToastify.css';
import DeleteBtn from "@/Components/stateless/buttons/DeleteBtn";
import RemoveProductAction from "@/context/actions/RemoveProductAction";


/**
 * It renders the increment and decrement counter with remove from cart button.
 * @param { IRemoveOrderCounterProps } props 
 * @returns 
 */
export default function RemoveOrderCounter(props: IRemoveOrderCounterProps) {
    const { dispatch } = useAppContext();
    const [ count, setCount ] = useState(props.initialCount);

    const handleRemoveProduct = () => {
        const removeAction = new RemoveProductAction(props.productCartModel.id)
        dispatch(removeAction)
    }

    const changeIncrementCount = () => setCount(count + 1)
    const changeDecrementCount = () => {
        if (count != 1) {
            setCount(count - 1)
        } else {
            handleRemoveProduct();
        }
    }
    const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => setCount(_dismissEmpty(event.target.value))

    return (
        <Fragment> 
            <div className="flex items-center justify-center gap-4">
                <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
                    <button onClick={changeIncrementCount}  className="shrink-0 px-2 text-md text-gray-500">+</button>
                    <input type="number" onChange={changeCount} value={count} className="w-[50px] flex-1 text-center appearance-none bg-transparent" />
                    <button onClick={changeDecrementCount} className="shrink-0 px-2 text-md text-gray-500">-</button>
                </div>
            </div>

            <DeleteBtn handleClick={handleRemoveProduct}/>

        </Fragment>

    );
}


/**
 * It is a helper function that converts the string into number with dismissing then numbers below 1.
 * @param number 
 */
const _dismissEmpty = (number: string): number => {
    try {
        const newCount = Number.parseInt(number)
        return (newCount > 0) ? newCount : 1
    } catch(e) {
        return 1;
    }
}


interface IRemoveOrderCounterProps {
    productCartModel: CartProductModel,
    initialCount: number
}