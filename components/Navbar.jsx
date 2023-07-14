import React from 'react'
import { 
    AppBar, 
    Box, 
    Button, 
    Container, 
    Stack, 
    styled 
} from '@mui/material'


const Menu = styled(Box)({
    borderBottom:"1px solid #111",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    paddingTop: 2
})

const MenuItem = styled(Button)({
    fontWeight:"900",
    fontSize:"15px",
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
  return (
    <Container>
        <AppBar position='static' color='transparent' elevation={1}>
            <Menu>
                <Stack direction={"row"}>
                    <Logo>CodingDevNemoto</Logo>
                    <Stack direction={"column"}>
                        <LogoDesc sx={{ marginLeft:1, marginTop:1 }}>
                            The Blog
                        </LogoDesc>
                        <LogoDesc>Gates Jouney</LogoDesc>
                    </Stack>
                </Stack>

                <MenuItem color='inherit' href='/'>Books</MenuItem>
                <MenuItem color='inherit' href='/'>Videos</MenuItem>
                <MenuItem color='inherit' href='/'>Year In Review</MenuItem>
            </Menu>
        </AppBar>
    </Container>
  )
}

export default Navbar