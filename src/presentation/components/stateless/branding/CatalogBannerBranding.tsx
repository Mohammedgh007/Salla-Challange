import React from "react";
import catalogImage from '@/images/catalog_banner.png'

/**
 * It renders the top banner image in the catalog page.
 */
export default function CatalogBannerBranding() {

    return (
        <div className="w-full  bg-gray-100 rounded-lg mb-8">
            <img src={catalogImage.src} className="w-full aspect-video rounded-lg" alt="" />
        </div>
    );
}