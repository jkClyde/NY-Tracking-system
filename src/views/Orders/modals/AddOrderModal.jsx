import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { BASE_URL } from 'src/backend_url';

const AddOrderModal = ({ open, onClose, onSubmit, setRefresher }) => {
  const [customerName, setCustomerName] = useState('');
  const [kilo, setKilo] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async () => {
    try {
      const newOrder = {
        customer_name: customerName,
        kilo: parseFloat(kilo),
        price: parseFloat(price),
      };

      const response = await fetch(`${BASE_URL}/orders/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        const data = await response.json();
        onSubmit(data);
        setRefresher(1);
        onClose();
      } else {
        console.error('Failed to add order. Status code:', response.status);
      }
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
          borderRadius: 4,
          boxShadow: 24,
          maxWidth: 400,
          width: '80%',
        }}
      >
        <TextField
          label="Customer Name"
          variant="outlined"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          fullWidth
          mb={2}
        />
        <Box mb={2} />
        <TextField
          label="Kilo"
          variant="outlined"
          value={kilo}
          onChange={(e) => setKilo(e.target.value)}
          fullWidth
          mb={2}
        />
        <Box mb={2} />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          mb={2}
        />
        <Box mb={2} />
        <Button variant="contained" onClick={handleSubmit} fullWidth sx={{ borderRadius: 0 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default AddOrderModal;
