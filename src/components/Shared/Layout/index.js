import React from 'react';

const Layout = (props) => (
  <section className="container" className={`${props.addClass ? `${props.addClass} container` : 'container'}`}>
    {props.children}
  </section>
);

export default Layout;