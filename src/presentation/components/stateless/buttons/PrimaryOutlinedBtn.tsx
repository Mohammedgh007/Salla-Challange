
/**
 * It represents the primary outlined button ui for the website.
 * @param props 
 * @returns {ReactNode}
 */
export default function PrimaryOutlinedBtn(props: IPrimaryOutlinedBtnProps) {

    return (
        <button 
            type="button" 
            className="w-full bg-transparent text-primary font-bold border-2 border-primary hover:border-transparent p-2 text-md rounded-md" 
            onClick={props.HandleClick}>
                {props.btnText} 
        </button>
    );
}

interface IPrimaryOutlinedBtnProps {
    btnText: string,
    HandleClick(): void
}