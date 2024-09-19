import React from "react";

/**
 * It renders the delete button that is used for the cart checkout.
 */
export default function DeleteBtn(props: IDeleteBtnProps) {

    return(
        <button type="button" onClick={props.handleClick} className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1">
            <i className="sicon-trash"></i>
        </button>
    );
}


interface IDeleteBtnProps {
    handleClick(): void
}