import { Button, Typography } from '@mui/material';
import react from 'react';
import { useState } from 'react';


const StateBasics = ()=>{
    var [name,setName]= useState("luttapi")
    const nameChange = ()=>{
        setName('kuttusan')
    }
    return (
        <div>
        <Typography variant='h3'>welcome {name}</Typography>
        <Button variant='containe' onClick={nameChange}>change</Button> &nbsp;
         <Button variant='containe' onClick={()=>{setName("mayavi")}}>change</Button>
        </div>
    )
}

export default StateBasics 