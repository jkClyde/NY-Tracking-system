import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from 'src/backend_url';

const LaundryCard = ({
  id,
  customer_name,
  date_added,
  laundry_id,
  price,
  kilo,
  status,
  is_claimed,
  setRefresher,
}) => {
  const [is_ready, setIsReady] = useState(false); // State to manage ready status

  const handleToggleReady = async () => {
    try {
      const apiUrl = `${BASE_URL}/orders/toggle_ready_status/`;
      const updatedOrder = { order_id: id, is_ready: !is_ready }; // Toggle the ready status
      const response = await axios.post(apiUrl, updatedOrder);
      // If the request is successful, update the UI
      if (response.status === 200) {
        // Update is_ready state
        setIsReady(!is_ready);
        console.log('Order ready status updated successfully');
        setRefresher(1);
      }
    } catch (error) {
      console.error('Error updating order ready status:', error);
    }
  };

  return (
    <Card sx={{ maxWidth: 300, margin: '15px', borderRadius: 3 }}>
      <CardHeader
        title={customer_name}
        subheader={
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff' }}
          >{`Laundry ID: ${laundry_id}`}</Typography>
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
            <Typography variant="body1">{date_added}</Typography>
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
            <Button
              variant="contained"
              color={is_ready ? 'primary' : 'warning'}
              fullWidth
              onClick={handleToggleReady}
            >
              {is_ready ? 'Undone' : 'Done'}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" fullWidth disabled={is_claimed}>
              Claimed
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LaundryCard;
