import React from 'react';
import Layout from '../Shared/Layout';
import './index.css';

import Box from '../Shared/Box';

const Header = () => (
  <Layout>
    <header className="container_header">
      <Box>
        <nav className="header_nav">
          <ul className="header_ul">
            <li className="header_li">
              <span className="header_a">sacola</span>
            </li>
            <li className="header_li">
              <span className="header_a">pagamento</span>
            </li>
            <li className="header_li">
              <span className="header_a">confirmação</span>
            </li>
          </ul>
        </nav>
      </Box>
    </header>
  </Layout>
)

export default Header; 