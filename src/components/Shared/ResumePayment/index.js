import React from 'react';

import Layout from '../Layout';
import Box from '../Box';
import Title from '../Title';
import Price from '../Price';

import './index.css';

const ResumePayment = () => (
  <Layout>
    <Box addClass="content_resume_payment"> 
      <section className="resume_payment_item">
        <Title title="Produtos" addClass="normal default_title" />
        <Price price="R$ 624,80" addClass="normal default_price" />
      </section>
      <section className="resume_payment_item">
        <Title title="Frete" addClass="normal default_title" />
        <Price price="R$ 5,30" addClass="normal default_price" />
      </section>
      <section className="resume_payment_item">
        <Title title="Desconto" addClass="discount default_title" />
        <Price price="- R$ 30,00" addClass="discount default_price" />
      </section>
      <section className="resume_payment_item">
        <Title title="total" addClass="total default_title" />
        <Price price="R$ 600,10" addClass="total default_price" />
      </section>
    </Box>
  </Layout>
);

export default ResumePayment;