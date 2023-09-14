import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Button, TextField, styled } from '@mui/material'
import { Facebook, Twitter } from '@mui/icons-material'

const Register = ({ title, open, onClose }) => {
    const [value, setValue] = useState(0);

    const handleClose = () => {
        onClose(!open)
    }

    // Function of Tabs 
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }

    const StyledBox = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
    })

    const SocialBox = styled(Box)(({myBgColor}) => ({
        background: myBgColor,
        padding: 4,
        textAlign: "center",
        width: "60px",
        marginLeft: 1,
        cursor: "pointer"
    }))

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>                   
   
            <Box sx={{ width: '100%' }}>

              <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'flex-end' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Login" {...a11yProps(0)} />
                  <Tab label="SignUp" {...a11yProps(1)} />                  
                </Tabs>
              </Box>

                {/* Log In tab */}
              <CustomTabPanel value={value} index={0}>
                <StyledBox 
                    sx={{ 
                        backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/002/037/924/small/abstract-blue-background-with-beautiful-fluid-shapes-free-vector.jpg")',
                        backgroundSize: "cover" 
                    }}
                >
                    <Box flex={1}>
                        <Typography variant="h4">
                            Welcome back, Coder!
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nesciunt expedita earum consectetur officia vero non ab repudiandae fuga voluptatibus dolorem!
                        </Typography>
                        <Typography variant="body1">
                            <br />
                            <br />
                            Not a CondingStrade subscriber yet!
                        </Typography>
                    </Box>   
                    <Box flex={1}> 
                        <TextField 
                            id='outlined-basic'
                            label='Email Address'
                            variant='filled'
                            fullWidth
                        />
                        <TextField 
                            id='outlined-password-input'
                            label='Password'
                            type='password'
                            variant='filled'
                            fullWidth
                            sx={{ marginTop: 1, marginBottom: 1 }}
                        />

                        <Button
                            sx={{
                                textAlign: "center",
                                background: "#0049fb",
                                color: "white",
                                width: 300,
                                padding: 1,
                                mb: 3,
                            }}
                        >
                            Login
                        </Button>
                        <Typography variant='body1'>
                            Or log in with your social media.
                        </Typography>
                        <StyledBox>
                            <SocialBox myBgColor={'lightBlue'}>
                                <Twitter sx={{ color: 'white' }} />
                            </SocialBox>
                            <SocialBox myBgColor={'blue'}>
                                <Facebook sx={{ color: 'white' }} />
                            </SocialBox>
                            
                        </StyledBox>
                    </Box>                
                </StyledBox>                
              </CustomTabPanel>

               {/* Sign Up tab */}
              <CustomTabPanel value={value} index={1}>
                <StyledBox 
                  sx={{ 
                      backgroundImage: 'url("https://img.freepik.com/free-vector/blue-fluid-shape-frame-design-resource_53876-114596.jpg?size=626&ext=jpg")',
                      backgroundSize: "cover" 
                  }}
                >
                    <Box flex={1}>
                        <Typography variant="h4">
                            Become a Subscriber
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nesciunt expedita earum consectetur officia vero non ab repudiandae fuga voluptatibus dolorem!
                        </Typography>
                        <Typography variant="body1">
                            <br />
                            <br />
                            Already joined!
                        </Typography>
                    </Box>   
                    <Box flex={1}> 
                        <Typography variant='body1'>Use your social account:</Typography>

                        <StyledBox>
                          <SocialBox myBgColor={'lightBlue'}>
                            <Twitter sx={{ color: 'white' }} />
                          </SocialBox>
                          <SocialBox myBgColor={'blue'}>
                            <Facebook sx={{ color: 'white' }} />
                          </SocialBox>
                        </StyledBox>
                        <Typography variant='body1'>Or Sign Up width E-mail:</Typography>

                        <StyledBox>
                          <Box>
                            <TextField 
                                id='outlined-basic'
                                label='First Name'
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1, marginBottom: 1 }}
                            />
                            <TextField 
                                id='outlined-password-input'
                                label='Last Name'                              
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1 }}
                            />
                            <TextField 
                                id='outlined-basic'
                                label='Email Address'                              
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1 }}
                            />
                            <TextField 
                                id='outlined-basic'
                                label='password'
                                type='password'                              
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1 }}
                            />
                            <TextField 
                                id='outlined-basic'
                                label='Postal code'                              
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1, marginBottom: 1 }}
                            />
                            <TextField 
                                id='outlined-basic'
                                label='Country'                              
                                variant='filled'
                                fullWidth
                                sx={{ marginTop: 1 }}
                            />
                            <Button 
                              sx={{
                                textAlign: "center",
                                background: "#0049fb",
                                color: "white",
                                width: 300,
                                padding: 1,
                              }}
                            >
                              SIGN UP
                            </Button>
                          </Box>
                          
                        </StyledBox>                                   
                    </Box>                
                </StyledBox> 
              </CustomTabPanel>  

            </Box>
        
        </Box>
      </Modal>
    </div>
  )
}


export default Register