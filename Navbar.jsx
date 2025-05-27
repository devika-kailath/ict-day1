
import { AppBar, Box, IconButton, Toolbar, Typography, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="red"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            my apps
          </Typography>
          <Button color="inherit">
            <Link to={'/'} style={{color:'white'}}>login</Link>
            </Button>
            <Button>
                <Link to={'/r'} style={{color:'white'}}>Reg</Link>
                </Button>
                <Button>
                    <Link to={'/t'} style={{color:'white'}}>DataCard</Link>
                    </Button>
                    <Button>
                        <Link to={'/c'} style={{color:'white'}}>DataTable</Link>
                        </Button>
                        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
