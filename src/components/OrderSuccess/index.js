import React from 'react';

import Layout from '../Shared/Layout';
import Box from '../Shared/Box';
import iconSuccess from '../../assets/images/icon-success.png';

import './index.css';

const OrderSuccess = () => (
  <Layout>
    <Box addClass="content_order_success">
      <img src={iconSuccess} alt="icon-success" title="icon-success" />
      <h2>COMPRA EFETUADA COM SUCESSO</h2>
    </Box>
  </Layout>
);

export default OrderSuccess;