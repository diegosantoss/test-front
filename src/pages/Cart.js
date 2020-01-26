import React from 'react';
import Products from '../components/Products';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';

import './Cart.css';

const Cart = () => (
  <>
    <section className="content_products_resume_payment">
      <Products />
      <ResumePayment />
    </section>
    <Button to="/payment" text="SEGUIR PARA O PAGAMENTO" />
  </>
);

export default Cart;



{/* <Redirect push to="/somewhere/else" /> */}
