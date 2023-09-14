import { Container, Fab, Grid } from '@mui/material'
import React from 'react'
import Card from './Card'

const Hero = () => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={12} mb={2} mt={2}>
                <Card 
                    direction={'row'} 
                    imgWidth={566}
                    imgHeight={400}
                    mycolor={'black'}
                    linkSrc='/'
                    fontSize={'40px'}
                    imgSrc="https://cdn.pixabay.com/photo/2023/08/21/23/09/los-angeles-8205184_1280.jpg"                    
                    heading={'Exemple'}
                    title={' The Ultimate CSS Battle champion from this Gates blog '}
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
                />
            </Grid>

            <Grid item mb={3} spacing={1}>
                <Card 
                    direction={'column'} 
                    imgWidth={280}
                    imgHeight={220}
                    mycolor={'black'}
                    linkSrc='/'
                    fontSize={'18px'}
                    imgSrc="https://cdn.pixabay.com/photo/2023/08/21/23/09/los-angeles-8205184_1280.jpg"                    
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
                />
            </Grid>
            <Grid item mb={3} spacing={1}>
                <Card 
                    direction={'column'} 
                    imgWidth={280}
                    imgHeight={220}
                    mycolor={'black'}
                    linkSrc='/'
                    fontSize={'18px'}
                    imgSrc="https://cdn.pixabay.com/photo/2023/08/21/23/09/los-angeles-8205184_1280.jpg"                    
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
                />
            </Grid>
            <Grid item mb={3} spacing={1}>
                <Card 
                    direction={'column'} 
                    imgWidth={280}
                    imgHeight={220}
                    mycolor={'black'}
                    linkSrc='/'
                    fontSize={'18px'}
                    imgSrc="https://cdn.pixabay.com/photo/2023/08/21/23/09/los-angeles-8205184_1280.jpg"                    
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
                />
            </Grid>
            <Grid item mb={3} spacing={1}>
                <Card 
                    direction={'column'} 
                    imgWidth={280}
                    imgHeight={220}
                    mycolor={'black'}
                    linkSrc='/'
                    fontSize={'18px'}
                    imgSrc="https://cdn.pixabay.com/photo/2023/08/21/23/09/los-angeles-8205184_1280.jpg"                    
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
                />
            </Grid>
        </Grid>
    </Container>
  )
}

export default Hero