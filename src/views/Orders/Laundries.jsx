import React, { useState, useEffect } from 'react';
import { Grid, Container, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LaundryCard from './LaundryCard';
import SearchIcon from '@mui/icons-material/Search';

import fetchOrders from './actions/fetch_orders';
import AddOrderModal from './modals/AddOrderModal';

const LaundryPage = () => {
  const [orders, setOrders] = useState([]);
  const [refresher, setRefresher] = useState(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchOrdersAndSetState = async () => {
      const fetchedOrders = await fetchOrders();
      if (fetchedOrders) {
        setOrders(fetchedOrders);
      }
    };

    fetchOrdersAndSetState();
  }, [refresher]);

  const handleSearch = () => {
    console.log(orders);
  };

  const handleAddOrder = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSubmitOrder = (newOrder) => {
    // You can implement the logic to submit the new order here
    console.log(newOrder);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleAddOrder}
                startIcon={<AddIcon />}
                sx={{ marginRight: 2 }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {orders.map((order, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LaundryCard {...order} setRefresher={setRefresher} />
          </Grid>
        ))}
      </Grid>
      <AddOrderModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleSubmitOrder}
        setRefresher={setRefresher}
      />
    </Container>
  );
};

export default LaundryPage;
