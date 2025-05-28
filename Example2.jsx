import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Example2 = () => {
var [val,setInterval]= useState()
  return (
    <div>
      <Typography varient='h3'>welcome to {val} </Typography>
      <Button variant='contained'onClick={() => {
        setInterval("gallery")
      }

      } >gallery</Button>
      <Button varient='contained' color='secondary' onClick={() => {
        setInterval("home")
      }
      }>home</Button>&nbsp;
      <Button varient='contained' color='error' 
      onClick={() => {
        setInterval("contact")
      }
      }>contact</Button>&nbsp;
    </div>
  )
}

export default Example2
