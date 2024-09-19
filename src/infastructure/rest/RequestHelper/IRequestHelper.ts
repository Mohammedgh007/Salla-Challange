


/**
 * This interface describes the desired behavior for RequestHelper, which is
 * facilitating calling http request and handling error message by throwing proper exceptions.
 */
export interface IRequestHelper {

    // sends http post rest with json body
    postData(url: string, body: object): Promise<any>;

    // sends http get request with query parameters.
    getData(url: string, query: object): Promise<any>;
}