import React from 'react';

function Product(props) {

  const { name, category, description, price, rating, units } = props.product;


  return(
    <div className="container thumbnail col-md-3 rounded bg-light text-center m-3 p-4">
      <h5 className="pb-0 mb-0">{name}</h5>
      <small className="text-muted">{category}</small>
      <hr />
      <p>{description}</p>
      <hr />
      <p><strong>{price}</strong></p>
    </div>
  )
}

export default Product;