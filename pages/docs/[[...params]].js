import { useRouter } from 'next/router';
import React from 'react';

const Docs = () => {
  const router = useRouter();
  //   console.log(router.query);
  const { params = [] } = router.query;
  console.log(params);
  return <div>hi this is document...</div>;
};

export default Docs;
