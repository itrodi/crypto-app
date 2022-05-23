import React from 'react'
import { Container, Typography } from '@material-ui/core';
import './Banner.css';
import Carousel from './Carousel';
const Banner = () => {
  return (
    <div className="banner">
     <Container className="bannerContent">
         <div className="tagline">
        <Typography variant="h2" style={{
           fontWeight:"bold",
           marginBottom:15,
           fontFamily:"Montserrat",
           display:"flex",
           flexDirection:"column",
           paddingTop:25,
           justifyContent:"space-around",
         }}
         >
         Crypto Point
        </Typography>
        <Typography variant="subtitle2" style={{
            color:"darkgrey",
            textTransform:"capitalize",
            fontFamily:"Monstserrat",
            display:"flex",
           flexDirection:"column",
           paddingTop:25,
           justifyContent:"space-around",
        }}
        >
         Get all the info regarding your favourite Crypto currency
        </Typography>
         </div>
         <Carousel/>
         </Container>
    </div>
  )
}

export default Banner