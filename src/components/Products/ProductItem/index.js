import React from 'react';
import Price from '../../Shared/Price';
import ProductName from '../../Shared/ProductName';
import ProductImage from '../../Shared/ProductImage';
import  './index.css';

const ProductItem = () => (
  <>
    <li className="products_item">
      <section className="products_image">
       <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
      </section>
      <section className="products_info">
        <ProductName name="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml" />
        <Price price="R$ 225,90" />
      </section> 
    </li>
    <li className="products_item">
      <section className="products_image">
        <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
      </section>
      <section className="products_info">
        <ProductName name="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml" />
        <Price price="R$ 225,90" />
      </section> 
    </li>
    <li className="products_item">
      <section className="products_image">
        {/* img api small */}
        <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
      </section>
      <section className="products_info">
        <ProductName name="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml" />
        <Price price="R$ 225,90" />
      </section> 
    </li>
  </>
);

export default ProductItem;