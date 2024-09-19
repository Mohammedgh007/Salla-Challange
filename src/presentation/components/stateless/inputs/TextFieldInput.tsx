


/**
 * It represents the general text field that is used for name, emails, and any other regular text.
 */
export default function TextFieldInput(props: ITextFieldInputProps) {
    const borderColor = (props.errorMsg) ? 'border-red-500' : ''

    return (
        <div className="mb-4">
          <label className="block mb-2 text-md"> {props.labelText} </label>
          <input onChange={props.handleOnChange} value={props.value} placeholder={props.placeHolderText} type="text" autoComplete='' className={`w-full p-2 bg-white ${borderColor} appearance-none rounded-md border text-md`} />
          {(props.errorMsg) && <label className="text-red-500">{props.errorMsg}</label>}
        </div>
    );
}


interface ITextFieldInputProps {
    labelText: string,
    placeHolderText: string,
    errorMsg: string, // empty string means there is no error
    value: string,
    handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void,
}