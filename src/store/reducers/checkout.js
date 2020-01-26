import store from 'store';

const getFromStorage = store.get('checkout');
let INITIAL_STATE = {};

if(!!getFromStorage){
  INITIAL_STATE = {
    ...getFromStorage, 
    loaded: true
  }
} else {
  INITIAL_STATE = {
    loaded: false
  }
}

const checkout = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SAVE_DATA':
      return { ...state, ...action.payload, loaded: true }
    default:
      return { ...state }
  }

  return { ...state };
}

export default checkout;