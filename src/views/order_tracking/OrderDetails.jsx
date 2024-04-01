import React from 'react';
import { Typography } from '@mui/material';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <Typography variant="body1">Order ID: {order.laundry_id}</Typography>
      <Typography variant="body1">Date Added: {order.date_added}</Typography>
      {order.is_ready ? (
        <Typography variant="body1" style={{ color: 'green', marginTop: '8px' }}>
          The laundry is ready for pick up.
        </Typography>
      ) : (
        <Typography variant="body1" style={{ color: 'red', marginTop: '8px' }}>
          The laundry is not yet ready for pick up.
        </Typography>
      )}
    </div>
  );
};

export default OrderDetails;
