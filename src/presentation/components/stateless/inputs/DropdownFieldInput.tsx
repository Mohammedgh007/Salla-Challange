import React, { Fragment } from "react";


/**
 * It renders the dropdown field based on Salla theme.
 * @param props 
 */
export default function DropdownFieldInput(props: IDropdownFieldInputProps) {
    const borderColor = (props.errorMsg) ? 'border-red-500' : ''

    return (
        <div className="flex flex-row items-center flex-1 w-full">
            {(props.labelText) && 
                <label style={{marginInlineEnd: '2rem'}}>{props.labelText}</label>
            }

            <div className="flex flex-col items-start flex-1 w-full">
                <select value={props.selectedValue} onChange={props.handleSelectOption} style={{marginBottom: (props.errorMsg) ? '0.3em' : ''}} className={`bg-white border text-md rounded-md ${borderColor} focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1`}>
                    {props.optionsValues.map((optionVal, index) => 
                        <option value={optionVal}> {props.optionsTexts[index]} </option>
                        )
                    }
                </select>

                {(props.errorMsg) && <label className="text-red-500">{props.errorMsg}</label>}
            </div>
            
        </div>
    );
}


interface IDropdownFieldInputProps {
    labelText?: string,
    errorMsg: string, // empty string means there is no error
    selectedValue: string,
    optionsValues: Array<string>,
    optionsTexts: Array<string>,
    handleSelectOption(event: React.ChangeEvent<HTMLSelectElement>): void,
}