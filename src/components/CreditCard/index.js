import React from 'react';
import InputMask from "react-input-mask";

import Layout from '../Shared/Layout';
import Box from '../Shared/Box';
import Title from '../Shared/Title';

import './index.css';

const CreditCard = () => (
  <Layout>
    <Box>
      <Title title="Cartão de Crédito" addClass="credit_card_title default_title" />
    </Box>

    <Box addClass="content_credit_card">
      <Box addClass="credit_card_item">
        <section className="credit_card_number">
          <Title title="Número do cartão:" addClass="credit_card_default_titles default_title" />
          <InputMask mask='9999.9999.9999.9999' placeholder="____.____.____.____"/>
        </section>
      </Box>
      <Box addClass="credit_card_item">
        <section className="credit_card_name">
          <Title title="Nome do Titular:" addClass="credit_card_default_titles default_title" />
          <input type="text" placeholder="Como no cartão"/>        
        </section>
      </Box>
      <Box addClass="credit_card_item">
        <section className="credit_card_AA">
          <Title title="Validade (mês/ano):" addClass="credit_card_default_titles default_title" />
          <InputMask mask='99/9999' placeholder="__/____" />
        </section>
        <section className="credit_card_CVV">
          <Title title="CVV:" addClass="credit_card_default_titles default_title" />
          <InputMask mask='999' placeholder="___" />
        </section>
      </Box>
    </Box>
  </Layout>
);

export default CreditCard;