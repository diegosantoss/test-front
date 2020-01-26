import React from 'react';

import CreditCard from '../components/CreditCard';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';

import './Payment.css'

const Payment = () => (
  <>
    <section className="content_credit_card_resume_payment">
      <CreditCard />
      <ResumePayment /> 
    </section>
    <Button to="/payment/success" text="FINALIZAR O PEDIDO" />
    <Button to="/cart" text="voltar" />
  </>
)

export default Payment;

