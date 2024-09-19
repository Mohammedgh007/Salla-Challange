'use client';

import { CartProductModel } from "@/models/cart/CartProductModel";
import React, { createContext, useContext, useMemo, useEffect, ReactNode, useReducer } from "react";
import { SallaContextState } from "./SallaContextState";
import { AppReducer, initialState} from "./AppReducer";
import { IReducerAction } from "./actions/IReducerAction";
import { DICoordinator } from "@/DICoordinator";
import initializeLoadedStateAction from "./actions/initializeLoadedStateAction";
import { SaveStateReqDto } from "@/requestDto/SaveStateReqDto";


// Define the type for our context data
type AppContextType = {
    state: SallaContextState,
    dispatch: React.Dispatch<IReducerAction>,
  };

  const stateStorage = DICoordinator.getSallaAppStateStorageInstance();

/**
 * It handles initializing the app context.
 */
const SallaAppContext = createContext<AppContextType>({ state: initialState, dispatch: () => {} });
export default function SallaAppContextWrapper({ children }: { children: ReactNode }): ReactNode { 
   const [ state, dispatch ] = useReducer(AppReducer, initialState);

   useEffect(() => {
      if (stateStorage.hasSavedState()) { //checking if there already is a state in local storage to load it.
         const loadedState = stateStorage.loadState() // JSON.parse(localStorage.getItem("state"))
         const initAction = new initializeLoadedStateAction(loadedState)
         dispatch(initAction)
      }
    }, []);
  
    useEffect(() => { // save the new state in local storage
      if (state !== initialState) {
        const reqDto: SaveStateReqDto = {
          state
        }
        stateStorage.saveState(reqDto)
      }
    }, [state]);
   
   return (
        <SallaAppContext.Provider value={{state, dispatch}}>
            {children}
        </SallaAppContext.Provider>
   );
}

/**
 * It lets client components to access the context.
 * @preCondition it is must be called within client component.
 */
export function useAppContext() {
   return useContext(SallaAppContext);
}