import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Minimoog Model D', description: 'Placing the utmost importance on high-quality materials, all components are carefully sourced and crafted to capture the indescribable feeling of the original Minimoog Model D.', price: '$5999', image: 'https://api.moogmusic.com/sites/default/files/image_gallery/2022-11/Minimoog_Model_D_Website-1.jpg'},
    { id: 2, name: 'Marvis', description: 'Mavis is a build-it-yourself analog synthesizer kit that delivers the huge depth of sound Moog is known for in a compact and feature-packed instrument.', price: '$374', image: 'https://api.moogmusic.com/sites/default/files/styles/super_key_2x/public/images/2022-06/Mavis_Beauty_B-2_0.jpg?itok=ElFAqw-f'},
];  

const Products = () => {
    return (
      <main>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
}

export default Products;