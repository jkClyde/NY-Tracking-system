import React from 'react';
import { Typography } from '@mui/material';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <Typography variant="body1">Order ID: {order.orderID}</Typography>
      <Typography variant="body1">Date: {order.date}</Typography>
      <Typography variant="body1">Status: {order.status}</Typography>
      {/* Add more order details here */}
    </div>
  );
};

export default OrderDetails;
