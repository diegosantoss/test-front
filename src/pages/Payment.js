import React from 'react';

import CreditCard from '../components/CreditCard';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';

const Payment = () => (
  <>
    <CreditCard />
    <ResumePayment /> 
    <Button to="/payment/success" text="FINALIZAR O PEDIDO" />
    <Button to="/cart" text="voltar" />
  </>
)

export default Payment;

