import React from 'react';

import Layout from '../Shared/Layout';
import Box from '../Shared/Box';
import Title from '../Shared/Title';

import './index.css';

const ResumeCreditCard = () => (
  <Layout>
    <Box>
      <Title addClass="default_title resume_credit_card_title" title="Pagamento" />
    </Box>    
    <Box addClass="content_resume_credit_card">
      <section className="resume_credit_card_items">
        <p className="resume_credit_card_number">****.****.****.1234</p>
        <p className="resume_credit_card_name">JOSÉ DA SILVA</p>
        <p className="resume_credit_card_date">05/2019</p>
      </section>
    </Box>
  </Layout>
);

export default ResumeCreditCard; 