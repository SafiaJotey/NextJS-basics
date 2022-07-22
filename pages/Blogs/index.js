import Link from 'next/link';
import React from 'react';

const index = ({ posts }) => {
  return (
    <div>
      <h3>Blog page</h3>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/blogs/${post.id}`} passHref>
              <div>
                <p>{post.id}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default index;
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};
