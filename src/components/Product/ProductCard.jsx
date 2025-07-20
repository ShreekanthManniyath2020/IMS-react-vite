import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from './ProductCardStyle';

const ProductCard = ({ product }) => {
  return (
  <Card>
    <img src={product.images?.[0]} alt={product.title} width="100%" height="150" />
    <h3>{product.title}</h3>
    <p>Category: {product.category}</p>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`}>View</Link>
  </Card>
    )
}

export default ProductCard