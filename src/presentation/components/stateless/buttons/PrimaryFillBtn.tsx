import React from "react";

/**
 * It represents the primary filled button ui for the website.
 * @param props 
 * @returns {ReactNode}
 */
export default function PrimaryFillBtn(props: IPrimaryFillBtnProps) {

    return (
        <button type="button" className="w-full bg-primary text-white border-2 p-2 text-md rounded-md" onClick={props.HandleClick}>
            {props.btnText}
        </button>
    );
}

interface IPrimaryFillBtnProps {
    btnText: string,
    HandleClick(): void
}