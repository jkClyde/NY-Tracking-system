import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Button, useTheme } from '@mui/material';

const LaundryCard = ({ name, dateAdded, laundryId, price, kilo, status }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 300, margin: '15px', borderRadius: 3 }}>
      <CardHeader
        title={name}
        subheader={
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff' }}
          >{`Laundry ID: ${laundryId}`}</Typography>
        }
        sx={{
          backgroundColor: '#191970', // Use a darker shade of the primary color
          color: '#fff', // Set color to white
        }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Date Added:
            </Typography>
            <Typography variant="body1">{dateAdded}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Kilo:
            </Typography>
            <Typography variant="body1">{kilo} kg</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Price:
            </Typography>
            <Typography variant="body1">₱{price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Status:
            </Typography>
            <Typography variant="body1">{status}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Ready
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" fullWidth>
              Claimed
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LaundryCard;
