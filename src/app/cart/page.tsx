"use client";

import CartLayout from "@/Layouts/CartLayout";

// in real project, this file will get instance from business/policies for business logic of computing checkout logic.
// in real project, this file will get instance from infrastructure/rest for checkout rest api.

/**
 * It coordinating between the presentation layer and the rest of layers for the cart page.
 */
export default function Cart() {
    
    return (
        <CartLayout />
    );
}