import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';

export const POSTS_QUERY = gql`
  query POSTS {
    posts {
      id
      data {
        cover {
          url
          file_name
          id
        }
        slug
        title
        body {
          text
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY); // <-- just works

  console.log('error', error);
  console.log('loading', loading);
  console.log('data', data);

  if (loading) {
    return 'loading...';
  }
  return (
    <Layout>
      <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
