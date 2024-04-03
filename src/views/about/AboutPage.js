import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        About Us
      </Typography>
      <section>
        <Typography variant="h4">Our Mission</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, velit at
          accumsan fermentum, mauris quam vehicula ante, vel lacinia lorem libero sed sapien.
          Pellentesque at magna nec velit sodales gravida. Sed sed pharetra elit, eget vestibulum
          mi. ... // Add your mission statement here
        </Typography>
      </section>
      <section>
        <Typography variant="h4">Our Vision</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, velit at
          accumsan fermentum, mauris quam vehicula ante, vel lacinia lorem libero sed sapien.
          Pellentesque at magna nec velit sodales gravida. Sed sed pharetra elit, eget vestibulum
          mi. ... // Add your vision statement here
        </Typography>
      </section>
    </Container>
  );
};

export default AboutPage;
