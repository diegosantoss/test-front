import React from 'react';

import Products from '../components/Products';
import OrderSuccess from '../components/OrderSuccess';
import ResumeCreditCard from '../components/ResumeCreditCard';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';


const SuccessPage = () => (
  <>
    <OrderSuccess />
    <ResumeCreditCard />
    <Products />
    <ResumePayment />
    <Button to="/payment" text="voltar" />
  </>
)

export default SuccessPage;