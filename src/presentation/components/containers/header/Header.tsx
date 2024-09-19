"use client";

import React, { ReactNode } from "react";
import StoreLogoBranding from "../../stateless/branding/StoreLogoBranding";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

/**
 * It renders the header in all screens.
 * @returns {TSX}
 */
export const Header = () => {

    const { state, dispatch } = useAppContext();
    const cartUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/cart`
    const loginUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/login`

    return (
        <header className="w-full">
            <div className="container">
                <div className="md:py-6 py-4">
                <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
                    <StoreLogoBranding />
                    
                    <div className="flex items-center gap-4">
                        <Link href={loginUrl} type="button" className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary">
                            <i className="sicon-user"></i>
                        </Link>
                        <Link href={cartUrl} type="button" className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary">
                            <i className="sicon-shopping-bag"></i>
                            <label style={{marginInline: '2px'}}> {state.cartProducts.length} </label>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}
