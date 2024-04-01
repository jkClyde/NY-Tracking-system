import { BASE_URL } from 'src/backend_url';

const fetchOrders = async () => {
  try {
    // Define the API endpoint URL
    const API_URL = `${BASE_URL}/orders/orders/`;

    // Send a GET request to retrieve orders
    const response = await fetch(API_URL);

    // Check if the request was successful
    if (response.ok) {
      const orders = await response.json();

      // Reverse the order of fetched data
      const reversedOrders = orders.reverse();

      // Process the retrieved orders, e.g., update state
      console.log(reversedOrders);
      return reversedOrders;
    } else {
      console.error('Failed to retrieve orders. Status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
    return null;
  }
};

export default fetchOrders;
