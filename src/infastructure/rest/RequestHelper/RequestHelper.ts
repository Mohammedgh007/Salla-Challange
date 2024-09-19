import BadRequestException from '@/exceptions/BadRequestException';
import InvalidCredentialsException from '@/exceptions/InvalidCredentialsException';
import { IRequestHelper } from './IRequestHelper';


/**
 * This is a helper class for the rest classes. It handles sending http requests with
 * specified url and body/query, and it throws the proper exception when the rest api returns an error.
 */
export default class RequestsHelper implements IRequestHelper{

    /**
     * It handles throwing the proper exception based on the given response when response status is not 200.
     * @param {Response} res stores the sent error message fromt the backend.
     */
    _throwMappedBadRequestException = (res: Response) => { 
        
        switch (res.status) {
            case 401:
                throw new InvalidCredentialsException("");
            default:
                throw new BadRequestException("");
        }
    }

    /**
     * It handles sending post request for non-authenticated requests
     * @param {string} url 
     * @param {object} body stores key values as in {key: value, ...}
     * @throws this function may various functions thrown by throwMappedExcpetion
     * @returns {object} the response body
     */
    postData = async (url: string, body: object): Promise<any> =>  { 
        if (body == null || body == undefined)
            body = {};
        
        try {
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            
            if (rawResponse.status != 200)  { 
                this._throwMappedBadRequestException(rawResponse)
            } else { 
                const resBody = await rawResponse.json()
                return (resBody == '') ? null : resBody;
            }
        } catch (e) {
            throw e
        }
    
    }


    /**
     * It handles sending post request for non-authenticated requests
     * @param {string} url 
     * @param {object} query stores key values as in {key: value, ...}
     * @throws this function may various functions thrown by throwMappedExcpetion
     * @returns {object} the response body
     */
    getData = async (url: string, query: object): Promise<any> =>  { 
        const queryStr = this.formatQuery(query);
        const finalizedStr = (queryStr) ? url + queryStr : url;
        
        try {
            const rawResponse = await fetch(finalizedStr, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (rawResponse.status != 200)  { 
                this._throwMappedBadRequestException(rawResponse)
            } else {  
                return await rawResponse.json();
            }
        } catch (e) { 
            throw e
        }
    
    }


    /**
     * It handles formatting the query fields into a http url string
     * @param query 
     * @returns {string}
     */
    formatQuery = (query: object): string => {
        let queryStr = '?'
        for(const [key, value] of Object.entries(query)) {
            if (queryStr == '?') { // first iteration.
                queryStr += `${key}=${value}`;
            } else {
                queryStr += `&${key}=${value}`;
            }
        }
        
        return (queryStr == '?') ? '' :  queryStr;
    }
}






  