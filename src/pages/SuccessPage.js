import React from 'react';

import Products from '../components/Products';
import OrderSuccess from '../components/OrderSuccess';
import ResumeCreditCard from '../components/ResumeCreditCard';
import ResumePayment from '../components/Shared/ResumePayment';
import Button from '../components/Shared/Button';

import './SuccessPage.css';

const SuccessPage = () => (
  <>
    <OrderSuccess />
    <ResumeCreditCard />
    <section className="content_success_page_resume_payment">
      <Products />
      <ResumePayment />
    </section>    
    <Button to="/payment" text="voltar" />
  </>
)

export default SuccessPage;