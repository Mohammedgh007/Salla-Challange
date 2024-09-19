import { useTranslations } from "next-intl";

/**
 * It is a helper class for view classes to generate formatted text for the prices.
 */
export default class PriceFormatter {

    /**
     * It returns a formatted number with a price
     * @param numberText represents the price as a number like '2.33'
     */
    static formatIntoPriceText(numberText: string): string {
        const t = useTranslations('');
        
        const numberWithCommas = numberText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `${numberWithCommas} ${t('CURRENCY')}`
    }
}