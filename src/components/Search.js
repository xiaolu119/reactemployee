import React from  "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact"

class Search extends React.Component{
    state = {
         employeerecords : [],
         columns : [
             {
                 label: "First Name",
                 field: "fname",
                 sort:"asc",
                 width:150
             },
             {
                label: "Last Name",
                field: "lname",
                sort:"asc",
                width:150
            },

            {
                label: "email",
                field: "email",
                sort:"asc",
                width:150
            },

            {
                label: "phone",
                field: "phone",
                sort:"asc",
                width:150
            },

            {
                label: "ID",
                field: "id",
                sort:"asc",
                width:150
            },
            {
                label: "location",
                field: "location",
                sort:"asc",
                width:150
            },
         ]
         
    }
    componentDidMount = () => {
        let employeerecords = []
        axios.get("https://randomuser.me/api/?results=200&nat=us")
         .then(response => {
             //console.log(response.data.results)
            for(let i=0;i < response.data.results.length; i++){
               let employeecard={
                   fname : response.data.results[i].name.first, 
                   lname : response.data.results[i].name.last, 
                   email : response.data.results[i].email,
                   phone : response.data.results[i].phone,
                   id : response.data.results[i].id.value,  
                   location : response.data.results[i].location.city,
               }
               employeerecords.push(employeecard) 
               
            }
            this.setState({employeerecords})
            console.log(this.state.employeerecords)
         });

    }
    render(){
        let data = {
            columns : this.state.columns,
            rows: this.state.employeerecords
        }
        return(<div>
            <div className="jumbotron">
                <h5>Usion Axios, API - RAndome USem</h5>
            </div>
            <MDBDataTable stripped bordered hover data ={data} />
        </div>)
    }
}

export default Search;
