import React from 'react';
import Products from '../components/Products';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';

const Cart = () => (
  <>
    <Products />
    <ResumePayment />
    <Button to="/payment" text="SEGUIR PARA O PAGAMENTO" />
  </>
);

export default Cart;



{/* <Redirect push to="/somewhere/else" /> */}
