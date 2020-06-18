import React from  "react";
import axios from "axios";

class Search extends React.Component{
    state = {

    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
         .then(response => {
            console.log(response.data)
         });

    }
    render(){
        return(<div>
     Search
        </div>)
    }
}

export default Search;
