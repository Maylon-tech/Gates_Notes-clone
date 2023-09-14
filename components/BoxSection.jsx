import { Box, Container, Fab, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import Card from './Card'

const StyledContainer = styled(Box)(() => ({
    color: 'white',
    background: '#111',
    padding: '2rem 1rem',
    width: '100%',
  })
)

const StyledBox = styled(Box) ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 50px 10px 50px',
  paddingBottom: '1rem',  
})


const BoxSection = () => {
  return (
    <>
        <StyledContainer>
            <Container>

              <StyledBox>
                <Box>
                  <Typography 
                    sx={{ 
                      textTransform: 'capitalize', 
                      borderBottom: '2px solid white',
                      width: 'fit-content',
                      fontWeight: 'bold',
                    }}
                  >
                    Category Name
                  </Typography>
                </Box>
                <Box>
                  <a style={{fontSize: 22}} href="#">See More</a>
                </Box>
              </StyledBox>      
                
                <Grid container sx={{ marginTop: 5}}>
                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                        imgSrc="https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_640.jpg"                    
                        heading={'Exemple'}                       
                        description={'Complete the challenge and go to next Step'}
                        author={'Cyborg Tech'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"                
                      />                      
                    </Grid>

                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                       
                        imgSrc="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg"                    
                        heading={'Exemple'}
                        
                        description={'Complete the challenge and go to next Step'}
                        author={'Consulting Tech'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"
                      />                      
                    </Grid>

                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                       
                        imgSrc="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_640.jpg"                    
                        heading={'Exemple'}
                        
                        description={'Complete the challenge and go to next Step'}
                        author={'Analyse Data'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"
                      />                      
                    </Grid>
                    
                </Grid>
              
            </Container>
        </StyledContainer>

        <StyledContainer sx={{ backgroundColor: 'white', color: '#111'}} mywidth="100%">
            <Container>
              <StyledBox>
                <Box flex={1}>
                  <Typography 
                    sx={{ 
                      textTransform: 'capitalize', 
                      borderBottom: '2px solid white',
                      width: 'fit-content',
                      fontWeight: 'bold',

                    }}
                  >
                    Category Name
                  </Typography>
                </Box>
                <Box>
                  <a href="#">See More</a>
                </Box>
              </StyledBox>      
                
                <Grid container>
                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                        
                        imgSrc="https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_640.jpg"                    
                        heading={'Exemple'}
                        
                        description={'Complete the challenge and go to next Step'}
                        author={'Kevin Powell'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"
                      />                      
                    </Grid>

                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                       
                        imgSrc="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg"                    
                        heading={'Exemple'}
                        
                        description={'Complete the challenge and go to next Step'}
                        author={'Kevin Powell'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"
                      />                      
                    </Grid>

                    <Grid item sm={4}>
                      <Card 
                        direction={'column'} 
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={'black'}
                        linkSrc='/'
                       
                        imgSrc="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_640.jpg"                    
                        heading={'Exemple'}
                        
                        description={'Complete the challenge and go to next Step'}
                        author={'Kevin Powell'}
                        EditButton={
                            <Fab 
                                size="small"
                                variant="extended"
                                color="success"
                                aria-label="edit"
                            >
                                Edit
                            </Fab>
                        }
                        Button="Button"
                        ButtonText="Read More"
                      />                      
                    </Grid>
                    
                </Grid>
              
            </Container>
        </StyledContainer>
    </>
  )
}

export default BoxSection