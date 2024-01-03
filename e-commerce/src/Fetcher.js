

const BASE_URL = 'http://localhost:3000';

export const Fetcher = async(url) => {
    let responseObject = {errormessage:'',data:[]};
    try{
        const response = await fetch(`${BASE_URL}${url}`);
        const responseData = await response.json();
        responseObject.data = responseData;
        return responseObject;
    }
    catch(error){
        responseObject.errormessage = error.message;
        return responseObject;
    }
}