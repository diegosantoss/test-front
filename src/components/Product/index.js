import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CheckoutActions from '../../store/actions/checkout';

import './index.css';

const Product = ({ checkout }) => {
  console.log('aaaaaaaa: ', checkout);
  return(
    <h1>Product</h1>
  )
};

const mapStateToProps = state => ({
  checkout: state.checkout
});
 
// const mapDispatchToProps = dispatch => bindActionCreators(CheckoutActions, dispatch)

export default connect(mapStateToProps)(Product)