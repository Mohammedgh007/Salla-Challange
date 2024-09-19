

/**
 * This interface is used to describe the minimum fields for any reducer action.
 */
export interface IReducerAction {
    typeName: string;
    payload: any;
}