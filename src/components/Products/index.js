import React from 'react';

import Layout from '../Shared/Layout';
import Box from '../Shared/Box';
import ProductItem from './ProductItem';
import Title from '../Shared/Title';

import './index.css';

const Products = ({ checkout, all }) => {
  return(
    <Layout>
      <Box>
        <Title addClass="default_title products_title" title="Produtos" />
      </Box>
      
      <Box addClass="content_products">
        <ul className="products_list">
          <ProductItem />
        </ul>
      </Box>
    </Layout>
  )
};

export default Products;