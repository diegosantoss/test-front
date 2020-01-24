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
  if(action.type === 'SAVE_DATA'){
    return { 
      ...state, 
      ...action.payload,
      loaded: true
     }
  }
  
  return { ...state };
}

export default checkout;