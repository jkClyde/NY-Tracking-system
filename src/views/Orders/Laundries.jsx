import React from 'react';
import { Grid, Container, IconButton, InputAdornment, TextField } from '@mui/material';
import LaundryCard from './LaundryCard';
import SearchIcon from '@mui/icons-material/Search';

const laundryData = [
  {
    name: 'John Doe',
    dateAdded: '2024-04-01', // Use a valid date format (YYYY-MM-DD)
    laundryId: 'LD001',
    price: 150,
    kilo: 2.5,
    status: 'Pending',
  },
  {
    name: 'Jane Smith',
    dateAdded: '2024-03-30',
    laundryId: 'LD002',
    price: 320,
    kilo: 5,
    status: 'In Progress',
  },
  // Add more laundry items as needed
];

const LaundryPage = () => {
  const handleSearch = () => {
    // Add search functionality here
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-start">
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
          </Grid>
        </Grid>
        {laundryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LaundryCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LaundryPage;
