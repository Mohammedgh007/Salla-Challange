import React from "react";
import bannerImage from "@/images/login_banner.jpg";

/**
 * It renders the login banner.
 */
export default function LoginBannerBranding() { 

    return (
        <div className="flex flex-row sm:flex-row items-center login_banner">

            <img src={bannerImage.src} alt="Logo" />

        </div>
    );
}