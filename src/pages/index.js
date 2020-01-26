import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../store/actions/checkout';

// header
import Header from '../components/Header';

// loading
import Loading from '../components/Shared/Loading';

//pages
const Cart = lazy(() => import('./Cart'));
const Payment = lazy(() => import('./Payment'));
const SuccessPage = lazy(() => import('./SuccessPage'));
 
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
          <Suspense fallback={ <Loading /> }>
            <Route component={() => <Redirect to="/cart" />} exact path='/' />
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