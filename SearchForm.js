import React from "react";
import { useState } from "react";


function SearchForm({onSearch}){
    const[quary, setQuary]=useState('');

    const handleChange= (event)=>{
        setQuary(event.target.value);
    };
    
        const handleSubmit=(event)=>{
            event.preventDefault();
            onSearch(quary);
        };



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={quary} onChange={handleChange} placeholder="Search GitHub users"></input>
            <button type="submit">Search</button>

        </form>
    );

}

export default SearchForm;