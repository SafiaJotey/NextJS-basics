import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{blog.id}</h3>
      <p>{blog.body}</p>
    </div>
  );
};

export default Blog;
export const getStaticPaths = () => {
  return {
    paths: [
      { params: { blogId: '1' } },
      { params: { blogId: '2' } },
      { params: { blogId: '3' } },
    ],
    fallback: false,
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
