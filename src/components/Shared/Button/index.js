import React from 'react';

import Layout from '../Layout';
import Box from '../Box';
import { Link } from 'react-router-dom';

import './index.css';

const Button = (props) => (
  <Layout>
    <Box addClass="content_button">
      <Link className="button_redirect" to={props.to}>{props.text}</Link>
    </Box>
  </Layout>
);

export default Button;