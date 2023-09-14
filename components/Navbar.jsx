import React, { useState } from 'react'
import { 
    AppBar, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Stack, 
    styled 
} from '@mui/material'
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material'
import Register from './Register'


const Menu = styled(Box)({
    borderBottom:"1px solid #111",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    paddingTop: 2
})

const MenuItem = styled(Button)({
    fontWeight:"900",
    fontSize:"12px",
    marginRight:"2px",
})

const Logo = styled('div')({
    fontWeight:900,
    color:'black',
    fontSize:'34px',
    cursor:"pointer",
})

const LogoDesc = styled(Box)({
    fontWeight:600,
    color:'black',
    fontSize:'12px',
})



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Container>
        <AppBar position='static' color='transparent' elevation={1}>
            <Menu>
                <Stack direction={"row"} flex={1}>
                    <Logo>CodingDevNemoto</Logo>
                    <Stack direction={"column"} sx={{ marginLeft:1, marginTop:1 }}>
                        <LogoDesc>
                            The Blog
                        </LogoDesc>
                        <LogoDesc>Gates Jouney</LogoDesc>
                    </Stack>
                </Stack>

                <Stack direction={"row"} m={2}>

                    <MenuItem sx={{ fontSize: '15px'}} color='inherit' href='/'>Books</MenuItem>
                    <MenuItem sx={{ fontSize: '15px'}} color='inherit' href='/'>Videos</MenuItem>
                    <MenuItem sx={{ fontSize: '15px'}} color='inherit' href='/'>Year In Review</MenuItem>

                    <Button 
                        onClick={handleOpen}
                        color='inherit'
                    >
                        Log In
                    </Button>

                    <MenuItem 
                    
                        color='inherit' 
                        sx={{ 
                            color: '#0049fb', 
                            border: '1px solid #0049fb',
                            fontWeight: 'bold'
                        }}
                    >
                        SIGN UP
                    </MenuItem>
                    <MenuItem 
                        color='inherit' 
                        sx={{ 
                            color: 'green', 
                            border: '1px solid green',
                            fontWeight: 'bold'
                        }}
                    >
                        CREATE
                    </MenuItem>
                </Stack>

                <IconButton size='small' edge="start" color='inherit'>
                    <SearchIcon sx={{ fontSize: 35 }} />
                </IconButton>
                <IconButton size='small' edge="start" color='inherit'>
                    <MenuIcon sx={{ fontSize: 35 }} />
                </IconButton>
            </Menu>
        </AppBar>

        <Register title="Log in" open={open} onClose={handleClose} />

    </Container>
  )
}

export default Navbar