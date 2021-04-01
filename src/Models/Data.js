class Data {
    static getData(keyword=''){
        return fetch(`https://www.amiiboapi.com/api/amiibo/${keyword}`)
        .then(response=>{
            return response.json();
        })
        .then(responseJson=>{
            if(responseJson.amiibo){
                return Promise.resolve(responseJson.amiibo)
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}
export default Data;