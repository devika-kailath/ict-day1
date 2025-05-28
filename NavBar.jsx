import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'

import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
          <Button>
            <Link to={"/"} style={{ color: "white"}}>
            StateBasics
            </Link>
          </Button>
          <Button>
            <Link to={"/r"} style={{ color: "white"}}>
            TextInput
            </Link>
          </Button>
          <Button>
            <Link to={"/t"} style={{ color: "white"}}>
            Count
            </Link>
          </Button>
          <Button>
            <Link to={"/c"} style={{ color: "white"}}>
            DataForm
            </Link>          
          </Button>
          <Button>
            <Link to={"/n"} style={{ color: "white"}}>
            Example2
            </Link>
          </Button>
          <Button>
            <Link to={"/s"} style={{ color: "white"}}>
            DataFetch
            </Link>
          </Button>
          <Button>
            <Link to={"/m"} style={{ color: "white"}}>
             DataCard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
