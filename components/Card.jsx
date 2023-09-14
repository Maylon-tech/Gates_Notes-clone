import { Box, Stack, Typography, styled } from '@mui/material'
import { convertLength } from '@mui/material/styles/cssUtils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const TextContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const StyledButton = styled(Box) ({
    border: "1px solid white",
    width: "120px",
    padding: 1,
    cursor: "pointer",
    textAlign: "center",
})

const StyledLink = styled(Box)(({fontSize, mycolor}) => ({
    fontSize: fontSize,
    fontFamily: "source-serif-pro, Source Serif Pro",
    fontWeight: 'bold',
    color: mycolor ? mycolor : 'black',
    cursor: 'pointer',
    ":hover": {
        textDecoration: 'underline',
    }
}))

const Card = ({
    EditButton,
    imgHeight,
    imgWidth,
    heading,
    description,
    author,
    imgSrc,
    linkSrc,
    fontSize,
    title,
    direction,
    Button, 
    ButtonText
}) => {
  return (
    <Stack sx={{ cursor: 'pointer'}} direction={direction}>
        <Box sx={{ margin: "auto" }}>
            <Box sx={{ marginBottom: -4.5 }}>{EditButton}</Box>
            <Link href={linkSrc}>
                <Box 
                    sx={{ position: "relative" }}
                >
                    <Image 
                        height={imgHeight} 
                        width={imgWidth}
                        src={imgSrc} 
                        alt="heroImage"                         
                    />
                </Box>
            </Link>
        </Box>

        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TextContainer>
                <Typography 
                    variant='h7'
                    sx={{
                        borderBottom: '2px solid',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        width: 'fit-content',
                        mb: '15px',
                    }}
                >
                    {heading}
                </Typography>

                <StyledLink fontSize={fontSize}>
                    <Link href={linkSrc}>{title}</Link>
                </StyledLink>
                <Box>
                    {description}
                </Box>
                <Typography variant='h6' fontWeight={900}>
                    {author}
                </Typography>

                {
                    Button ? <StyledButton> { ButtonText } </StyledButton> : ""
                }
                
            </TextContainer>
        </Box>

    </Stack>
  )
}

export default Card