
import React from "react";

/**
 * It renders the footer in all screens.
 * @returns {TSX}
 */
export const Footer = () => {

    return(
        <footer className="w-full h-[80px] flex items-center justify-center text-primary bg-secondary-50 mt-4 md:mt-6">
            <p className="text-sm">كافة الحقوق محفوظة لدى: متجر التجربة الجميلة | 2023</p>
        </footer>
    );
}