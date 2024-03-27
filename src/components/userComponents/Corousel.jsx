import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';

function CorouselItem({ items }) {
  return (
    <>
    <Carousel >
    {items.map((item) => (
      <Paper
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h3" >{item.title}</Typography>
      <Typography variant="h6" sx={{marginY:'2%',width:'35%',textAlign:'center'}}>{item.subtitle}</Typography>
      <Button variant="text"  sx={{ textTransform: "none",  minWidth: "187px",fontSize:'20px',color:'white',border:'1px solid'}}>
        {item.buttonText}
      </Button>
    </Paper>
    ))}
  </Carousel>
  </>
  )
}

export default CorouselItem