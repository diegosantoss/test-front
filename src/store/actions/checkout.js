import axios from 'axios';
import store from 'store';

export const createRequest = () => {
  return (dispatch) => {
    return axios('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(response => {
        dispatch(getData(response.data));
        store.set('checkout', response.data)
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getData = (data) => ({
  type: 'SAVE_DATA',
  payload: data
})