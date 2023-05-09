import axios from 'axios';

const API_URL = 'https://opensky-network.org/api';

class Api {
  static async get(endpoint) {
    const url = `${API_URL}/${endpoint}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Api;
