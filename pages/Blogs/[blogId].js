import { useRouter } from 'next/router';
import React from 'react';

const Blog = ({ blog }) => {
  const router = useRouter();
  if (router.isFallback) {
    <p>Loading....</p>;
  }
  return (
    <div>
      <h3>{blog?.id}</h3>
      <p>{blog?.body}</p>
    </div>
  );
};

export default Blog;
export const getStaticPaths = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const datas = await response.json();
  // const paths = datas.map((data) => {
  //   return {
  //     params: {
  //       blogId: `${data.id}`,
  //     },
  //   };
  // });
  return {
    paths: [
      { params: { blogId: '1' } },
      { params: { blogId: '2' } },
      { params: { blogId: '3' } },
    ],
    // paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = await response.json();
  return {
    props: {
      blog: data,
    },
  };
};
