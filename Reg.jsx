import React from 'react'
import {Button,Typography, TextField } from '@mui/material'
import '../App.css'

const Reg = () => {
  return (
    <div className="box">
       <Typography variant="h1">registration</Typography>
        <TextField variant="outlined" label="name" /><br />
        <TextField variant="outlined" label="department" /><br />
      <TextField variant="outlined" label="age" /><br />
      <TextField variant="outlined" label="user name" /><br />
      <TextField variant="outlined" label="password" /><br />
      <Button>submit</Button>



      
    </div>
  )
}

export default Reg
