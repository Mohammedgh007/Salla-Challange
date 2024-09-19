import { SallaContextState } from "@/context/SallaContextState";
import { SaveStateReqDto } from "@/requestDto/SaveStateReqDto";


/**
 * It represents the required functionalities for the class that save and loads
 * the data of AppContext
 */
export interface ISallaAppStateStorage {

    saveState(reqDto: SaveStateReqDto): void;
    loadState(): SallaContextState;
    hasSavedState(): boolean;
}