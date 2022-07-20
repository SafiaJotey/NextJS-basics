import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  console.log(router.query);
  const { pid } = router.query;
  return (
    <div>
      <p>Product: {pid}</p>
    </div>
  );
};

// instead of having dynamic routes which take anything after path dynamically, nextJs is smart enough to find the best match first as sweater page.so if negivate to product/sweater nextJs will first find a path product/sweater.js if didn't got then find a dynamic routes

export default ProductDetails;
