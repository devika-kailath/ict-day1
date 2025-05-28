import { Card, Button, CardActions, CardContent, Grid, Typography, CardMedia } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const DataCard = () => {
    var[pro, setPro] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setPro(res.data)
        })
.catch((err)=>console.log(err))
    },[])
        
    
  return (
    <div>
      <Grid container spacing={2}>
        {pro.map((Val,i)=>{
          return(
            <Grid size={{xs:12, sm:6, md:4}}>
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       sx={{ height: 140}}
        image={Val.image}
        title="greeniguama"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>   
            </Grid>
          )
        }
        )}
      </Grid>
    </div>
  )
}

export default DataCard
