import Link from 'next/link';
import React from 'react';

const products = ({ productId = '75' }) => {
  return (
    <div>
      <p>
        {' '}
        <Link href="/">
          <a>Go Back to Home</a>
        </Link>
      </p>
      <h1>
        {' '}
        <Link href="/product/1">
          <a>Product1</a>
        </Link>
      </h1>
      <h1>
        {' '}
        <Link href="/product/2">
          <a> Product2</a>
        </Link>
      </h1>
      <h1>
        {' '}
        <Link href="/product/3">
          <a>Product3</a>
        </Link>
      </h1>
      <h1>
        {' '}
        <Link href={`/product/${productId}`}>
          <a>Product75</a>
        </Link>
      </h1>
    </div>
  );
};

export default products;
