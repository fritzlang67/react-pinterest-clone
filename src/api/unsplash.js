import axios from 'axios';

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID -KpXQBXwl60mbVcoPP1aTSRI6x9hRkw6KmTgM6qo5VY"
  }
});
