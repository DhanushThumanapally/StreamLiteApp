import React, { useState } from 'react';
import {Paper,TextField } from '@material-ui/core';


function SearchBar(props) {
    const [searchTerm,setTerm]=useState("");

    function handleChange(event) {
        setTerm(event.target.value);
     
    }
    function onKeyPress(event) {
        if(event.key=='Enter')
        {
            props.onSubmit(searchTerm);   
        }
    }
   
    return(
        <Paper elevation={6} style={{padding :'25px'}}>
            <TextField 
            fullWidth label="Stream..." 
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
            />
        </Paper>
    );
}
export default SearchBar;