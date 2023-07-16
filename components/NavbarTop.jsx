import React from 'react'
import { 
    AppBar, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Stack, 
    Typography, 
    styled 
} from '@mui/material'
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fade from '@mui/material/Fade'

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

function ScrollTop(props){
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 150,
    })
    return (
        <Fade in={trigger}>
            <Box role={"presentation"}>{ children }</Box>
        </Fade>
    )
}


const NavbarTop = (props) => {
  return (
    <ScrollTop {...props}>
        <AppBar sx={{
            position:'fixed', top:'0px', width:'100%', backgroundColor:'black !important'
        }}>
            <Menu>
                <Typography flex={3} variant='h6' component={"div"} sx={{ marginLeft: 3}}>
                    CodingDevNemoto The Blog           
                </Typography>
                <Box flex={1}>
                    <Stack direction={"row"}>
            
                        <MenuItem color='inherit' sx={{color:'white', fontWeight:'bold'}}>Log In</MenuItem>
                        <MenuItem 
                            color='inherit' 
                            sx={{ 
                                color: 'white', 
                                background:'#0049fb',
                                textAlign: 'center',                            
                                fontWeight: 'bold',
                                fontSize: 11,
                                marginTop: 2,
                                height: '50%',
                                marginRight: '0px'
                            }}
                        >
                            SIGN UP
                        </MenuItem>
                        <MenuItem 
                            color='inherit' 
                            sx={{ 
                                color: 'white', 
                                background:'green',
                                textAlign: 'center',                            
                                fontWeight: 'bold',
                               
                                marginTop: 2,
                                height: '50%',
                                
                                margin: "15px 2px 0px 4px"
                            }}
                        >
                            CREATE
                        </MenuItem>
                        
                        <IconButton 
                            size='small' 
                            edge="start" 
                            color='inherit'
                            sx={{ ml: 2 }}
                        >
                            <SearchIcon sx={{ fontSize: 35, fontWeight: 200 }} />
                        </IconButton>
                        <IconButton size='small' edge="start" color='inherit'>
                            <MenuIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Menu>
        </AppBar>
    </ScrollTop>
  )
}

export default NavbarTop