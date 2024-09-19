import React from "react";

/**
 * It represents the primary text button ui for the website.
 * @param props 
 * @returns {ReactNode}
 */
export default function PrimaryTextBtn(props: IPrimaryTextBtnProps) {

    return (
        <button type="button" className="w-fit text-primary underline p-2 text-md rounded-md" onClick={props.HandleClick}>
            {props.btnText}
        </button>
    );
}

interface IPrimaryTextBtnProps {
    btnText: string,
    HandleClick(): void
}