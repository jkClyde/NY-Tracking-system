import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OrderDetails from './OrderDetails.jsx'; // Assume OrderDetails is a separate component for displaying order details

const OrderTrackingPage = () => {
  const [orderID, setOrderID] = useState('');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const handleOrderSearch = () => {
    // Simulate fetching order details
    setTimeout(() => {
      if (orderID.trim() === '') {
        setError('Please enter an order ID.');
        setOrder(null);
      } else {
        setError('');
        const mockOrder = {
          orderID: orderID,
          date: '2024-04-01',
          status: 'Processing',
          // Add more details as needed
        };
        setOrder(mockOrder);
      }
    }, 1000); // Simulate loading delay
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
              label="Enter Order ID"
              variant="outlined"
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              fullWidth
              error={error !== ''}
              helperText={error}
              onKeyPress={handleKeyPress}
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
