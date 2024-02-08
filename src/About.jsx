import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Chip, Container } from '@mui/material'
import Usepic from "./image/Usepic.JPG"
const skills = ["Python", "Javascript","Java", "Golang", "React", "Nodejs"]

function About(){
return(
    <Container maxWidth="md" sx={{ mt: 4 }}>
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={4}>
        <Avatar
          alt="Your Name"
          src="/your-image.jpg"
          sx={{ width: 150, height: 150, mx: 'auto' }} // Centered on small screens
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mb: 2 }}>
          Francisco Ramirez
        </Typography>
        <Typography variant="subtitle1">
          A lifelong learner for 
        </Typography>
      </Grid>
    </Grid>

    <Typography variant="h5" sx={{ mt: 4 }}>
      
    </Typography>
    <Grid container spacing={1} sx={{ mt: 1 }}>
      {skills.map(skill => (
        <Grid item key={skill}>
          <Chip label={skill} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
}

export default About;
