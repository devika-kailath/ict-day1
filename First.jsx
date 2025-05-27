import React from 'react'
import { Typography,TextField } from "@mui/material"
const First = () => {
  return (
    <div>
      <h1>welcome to First page</h1>
      <input type="text" placeholder='username' />
      <br />
      <input type="password" placeholder='password' />
      <br />
      <button>login</button>
      <br />
      <br />
      <br />
      <div>
        <Typography variant="h1">welcome to login page</Typography>
        <TextField varient="outlined" label="username"/><br />
        <TextField varient="filled" label="username"/><br />
        <TextField variant="standard" label="username"/><br />   
             </div>

    </div>
  )
}

export default First
