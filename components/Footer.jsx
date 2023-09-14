import React from 'react'
import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import {
    Box, 
    Container,
    Stack,
    styled,
    TextField,
    Typography,
} from "@mui/material"
import Link from 'next/link'

const CatList = [
    {
        id: 1,
        name: "About Us",
    },
    {
        id: 2,
        name: "Photo essays",
    },
    {
        id: 3,
        name: "Saving Lives",
    },
    {
        id: 4,
        name: "Search",
    },
    {
        id: 5,
        name: "books",
    },
    {
        id: 6,
        name: "Climate and Energy",
    },
    {
        id: 7,
        name: "Personal",
    },
    {
        id: 8,
        name: "Education",
    },
    {
        id: 9,
        name: "Pandemic Prevention",
    },
    {
        id: 10,
        name: "Podcast",
    },
    {
        id: 11,
        name: "Video",
    },
    {
        id: 12,
        name: "Inquility, gender and race",
    },
]

const LogoTwo = styled("div")({
    fontWeight: 800,
    fontSize: "18px",
    color: "white",
})

const List = styled("div")({
    fontWeight: 300,
    color: "white",
    marginTop: 20,
    marginBottom: 70,
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "480px",
    justifyContent: "center",
    alignItems: "center",
})

const ListItem = styled("a")({
    margin: "20px 0px 5px 0px",
    width: "150px",
    cursor: "pointer",
    fontFamiy: "sans-serif",
})

const StyledButton = styled(Box) ({
    border: "1px solid white",
    width: "120px",
    padding: 1,
    cursor: "pointer",
    textAlign: "center",
})

const Footer = () => {
  return (
    <Box sx={{background: 'black', height: '100%'}}>
        <Container >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {sm: 'row'},
                    flexWrap: 'wrap',
                    paddingTop: '80px'
                }}
            >
                <Stack flex={1} sx={{ marginLeft:  1 }}>
                    <LogoTwo>THE BLOG</LogoTwo>
                    <LogoTwo>OF CODINGNEMOTO</LogoTwo>
                </Stack>
                <Stack
                    flexDirection={"row"}
                    sx={{ cursor: "pointer", marginRight: 4 }}
                >
                    <Instagram color="warning" />
                    <Twitter color="primary" />
                    <Facebook color="primary" />
                </Stack>
            </Box>
            <Stack flexDirection={ { sm: "row" }}>
                <Box
                    flex={1}
                    mt={8}
                    sx={{
                        borderTop: "0.1px solid white",
                        borderBottom: "0.1px solid white",
                    }}
                >
                    <List>
                        {
                            CatList.map((categ) => (
                                <ListItem key={categ.id}>{categ.name}</ListItem>
                            ))
                        }
                    </List>
                </Box>

                <Box
                    flex={1}
                    mt={8}
                    sx={{
                        color: "white",
                        borderTop: "0.1px solid white",
                        borderBottom: "0.1px solid white",
                        borderLeft: "0.1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}    
                >
                    <Typography>Subscribe to CodingNemoto</Typography>

                    <TextField
                        id="standard-basic"
                        variant="standard"
                        color="info"
                        placeholder="Fisrt name"
                        inputProps={{
                            style: {
                                color: "white",
                                borderBottom: "2px solid white",
                                width: "300px",
                            },
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        variant="standard"
                        color="info"
                        placeholder="Last name"
                        inputProps={{
                            style: {
                                color: "white",
                                borderBottom: "2px solid white",
                                width: "300px",
                            },
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        variant="standard"
                        color="info"
                        placeholder="Email"
                        inputProps={{
                            style: {
                                color: "white",
                                borderBottom: "2px solid white",
                                width: "300px",
                            },
                        }}
                    />
                    
                    <StyledButton sx={{ marginTop: 2 }}>Sign Up</StyledButton>
                </Box>
            </Stack>
            <Box 
                sx={{
                    color: "gray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexwrap: "wrap",
                    gap: 3,
                    padding: 5,
                }}
            >
                <Typography>
                        &copy; 2023 CodingNemoto LLC
                </Typography>
                <Link href={"/privacy"} >Privacy</Link>
                <Link href={"/terms"} >Terms of use</Link>
                <Link href={"/contact"} >Contact</Link>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer