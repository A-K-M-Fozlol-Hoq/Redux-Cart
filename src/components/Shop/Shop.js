import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {
  const { products, addToCart } = props;
  console.log(products);
  return (
    <div>
      <h2>THis is shop</h2>
      {products.map((pd) => (
        <Products key={pd.id} product={pd} addToCart={addToCart}></Products>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
