import { SallaContextState } from "@/context/SallaContextState";

/**
 * It serves as an input for ISallaAppStateStorage.saveState
 */
export type SaveStateReqDto = {
    
    state: SallaContextState;


}