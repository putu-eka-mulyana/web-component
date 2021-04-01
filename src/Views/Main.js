import Data from './../Models/Data'
import './../components/list-app.js'
import './../components/search';
const Main =()=>{
const List = document.querySelector('list-app');
const Search = document.querySelector('search-app');
    const getAll=()=>{
        Data.getData()
        .then(responseSuccess)
        .catch(responseError)
    }
    const onSearch=()=>{
        if(Search.value == ''){
            getAll()
        }else{
            Data.getData(`?name=${Search.value}`)
            .then(responseSuccess)
            .catch(responseError)
        }
    } 
    const responseSuccess=results=>{
        List.items= results
    }
    const responseError=message=>{
        console.log(message);
    }
    Search.eventSearch = onSearch
    getAll();
}
export default Main;