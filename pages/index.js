import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div>
      <h1> welcome to Home Page</h1>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
};

export default index;
