import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../store/actions/checkout';

// header
import Header from '../components/Header';

//pages
const Cart = lazy(() => import('./Cart'));
const Payment = lazy(() => import('./Payment'));
const SuccessPage = lazy(() => import('./SuccessPage'));
const NotFound = lazy(() => import('./NotFound'));
 
class RoutesPages extends React.Component {
  constructor(props){
    super(props);
    
    if(!this.props.checkout.loaded){
      this.props.createRequest()
    }
  }

  render(){
    return (
      <>
        <Header />
        <Switch>
          <Suspense fallback={ <h1>loading</h1> }>
            <Route component={() => <Cart />} exact path='/cart' />
            <Route component={() => <Payment />} exact path='/payment' />
            <Route component={() => <SuccessPage />} exact path='/payment/success' />
          </Suspense>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => ({
  checkout: state.checkout
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RoutesPages);