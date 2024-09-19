import { ProductsCategoriesModel } from "@/models/products/ProductsCategoriesModel";
import ICatalogValidator from "@/validators/CatalogValidator/ICatalogValidator";
import React, { useState } from "react";
import DropdownFieldInput from "@/Components/stateless/inputs/DropdownFieldInput";
import { useTranslations } from "next-intl";
import PrimaryFillBtn from "@/Components/stateless/buttons/PrimaryFillBtn";

/**
 * It renders the search form for CatalogLayout to filter and sort products.
 */
export default function SearchProductsForm(props: ISearchProductsFormProps) {
    const [ category, setCategory ] = useState('');
    const [ categoryErrorMsg, setCategoryErrorMsg ] = useState('');
    const [ isSortingDesc, setIsSortingDesc ] = useState(true);
    const [ isSortingDescErrorMsg, setIsSortingDescErrorMsg ] = useState('');
    
    const t = useTranslations();

    // categories field props
    const categoriesFieldOptionsText = [
        t('PRODUCT_SEARCH_FORM_CATEGORIES_ALL'), ...(props.categories.categoriesList)
    ]
    const categoriesFieldOptionsVal = [
        '', ...(props.categories.categoriesList)
    ]
    const handleSelectCategoryOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value)
        setCategoryErrorMsg(props.validator.validateCategory(event.target.value, t))
    }

    // sort field props
    const sortFieldOptionTexts = [
        t('PRODUCT_SEARCH_FORM_SORT_OPT1'),
        t('PRODUCT_SEARCH_FORM_SORT_OPT2')
    ]
    const sortFieldOptionsVals = [ '1', '0' ] // 1 is true while 0 is negative
    const handleSelectSortOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const boolVal = ('1' == event.target.value) ? true : false
        setIsSortingDesc(boolVal)
        setIsSortingDescErrorMsg(props.validator.validateSort(boolVal, t))
    }

    const handleSubmit = async () => {
        await props.submitForm(category, isSortingDesc)
    }


    return (
        <div className="flex items-center justify-between gap-8 mb-4 w-full p-2 border border-secondary-50" style={{background: '#ebfaf7'}}>
            {/* Categories Field */}
            <div className="search-product-field">
                <DropdownFieldInput 
                    labelText={t('PRODUCT_SEARCH_FORM_CATEGORIES_LABEL')}
                    errorMsg={categoryErrorMsg}
                    optionsTexts={categoriesFieldOptionsText}
                    optionsValues={categoriesFieldOptionsVal}
                    selectedValue={category}
                    handleSelectOption={handleSelectCategoryOption}
                />
            </div>

            {/* Sort Field */}
            <div className="search-product-field">
                <DropdownFieldInput 
                    labelText={t('PRODUCT_SEARCH_FORM_SORT_LABEL')}
                    errorMsg={isSortingDescErrorMsg}
                    optionsTexts={sortFieldOptionTexts}
                    optionsValues={sortFieldOptionsVals}
                    selectedValue={(isSortingDesc) ? '1' : '0'}
                    handleSelectOption={handleSelectSortOption}
                />
            </div>

            {/* submit button */}
            <div className="search-product-btn">
                <PrimaryFillBtn btnText={t('PRODUCT_SEARCH_FORM_BTN_SEARCH')} HandleClick={handleSubmit}               
                />
            </div>
        </div>
    );

}


interface ISearchProductsFormProps {
    validator: ICatalogValidator,
    categories: ProductsCategoriesModel,
    submitForm(selectedCategory: string, isSortingDesc: boolean): Promise<string> // the returned string is the error message if needed.
}