import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OrderDetails from './OrderDetails';
import axios from 'axios';
import { BASE_URL } from 'src/backend_url';
const OrderTrackingPage = () => {
  const [orderID, setOrderID] = useState('');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const handleOrderSearch = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/orders/search/`, {
        laundry_id: orderID.toUpperCase(), // Capitalize the input
      });
      const data = response.data;
      console.log(response.data);
      console.log(response.data[0].laundry_id);
      setOrder(response.data[0]);
      setError('');
    } catch (error) {
      console.error('Error fetching order:', error);
      setError('Error fetching order. Please try again.');
      setOrder(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOrderSearch();
    }
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <Typography variant="h4" gutterBottom>
        Track Your Order
      </Typography>
      <Paper elevation={3} style={{ padding: '24px', marginBottom: '32px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              label="Enter Laundry ID"
              variant="outlined"
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              fullWidth
              error={error !== ''}
              helperText={error}
              onKeyPress={handleKeyPress}
              inputProps={{ style: { textTransform: 'uppercase' } }} // Ensure input display is uppercase
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOrderSearch}
              style={{ width: '100%' }}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {order && (
        <Paper elevation={3} style={{ padding: '24px' }}>
          <OrderDetails order={order} />
        </Paper>
      )}
    </Container>
  );
};

export default OrderTrackingPage;
