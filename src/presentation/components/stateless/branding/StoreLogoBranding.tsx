import React from "react";
import {useTranslations} from 'next-intl';
import Link from "next/link";

/**
 * It renders the store icon with the store title.
 */
export default function StoreLogoBranding() {
    const t = useTranslations('');

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 relative">

            {/* Logo */}
            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL}/catalog`} className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
                <img src="https://cdn.salla.network/images/logo/logo-square.png" alt="Logo" />
            </Link>

            {/* Title */}
            <div className="flex flex-col text-left">
                <h1 className="text-xl">{t('STORE_TITLE')}</h1>
                <small className="text-gray-400" style={{textAlign: 'start'}}>{t('STORE_SUBTITLE')}</small>
            </div>

        </div>
    );
}