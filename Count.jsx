import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var [val, setVal] = useState(0);
    const inc = () =>{
        setVal(++val)
    };
    const dec = () => {
        setVal(--val);
    }
  return (
    <div>
      <Typography variant='h3'>{val}</Typography>
      <Button variant="contained" color="success" onClick={inc}>
              +
      </Button>
      &nbsp;
      <Button variant="contained" color="error" onClick={dec}>
        -
     </Button>
    </div>
  )
}

export default Count
