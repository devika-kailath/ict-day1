
import { Typography ,TextField, Button} from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {
  var[data, setData] = useState();
  var[Output, setOutput] = useState();
  const getName = (e) => {
     console.log(e)
     setData(e.target.value);
  };
  const setName = () => {
    setOutput(data)
  }
  return ( 
    <div>
      <Typography variant="h3">welcome {Output}</Typography> <br/>
      <TextField variant="outlined" label="username" onChange={getName}/>
      <br />
      <br />
      <Button variant="contained" onClick={setName}>getName</Button>
    </div>
  )
}

export default TextInput

