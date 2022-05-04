import axios from 'axios';

const api = axios.create({
  //   headers: {
  //     Authorization: token != null ? 'Bearer ' + getToken() : null,
  //   },
  // would've been used if we had a token

  validateStatus: function (status) {
    switch (status) {
      case 200:
        return true;
      default:
        return true;
    }
  },

  responseType: 'json',
});

export default api;
