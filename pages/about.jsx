import { Box, Container, styled } from '@mui/material'
import React from 'react'


const BoxStyled1 = styled('div')({
  background: "blue",
  width: 300,
  height: 300,
  display: 'grid',
  placeItems: 'center',
  fontSize: '2rem',
  color: 'white',

  "&:hover > $BoxStyled2": {
    background: 'red',
    color: 'black'
  }
})

const BoxStyled2 = styled('div')({
  background: 'green',
  width: 100,
  height: 100,
  display: 'grid',
  placeItems: 'center',
  fontSize: '2rem',
  color: 'white',
  
})


const About = () => {
  return (
    <Container sx={{ m: 2, display: 'flex', gap: '2rem'}} maxWidth="md">
        <BoxStyled1>
          Box 01
          <BoxStyled2>
            Box 02
          </BoxStyled2>
        </BoxStyled1>

    </Container>
  )
}

export default About