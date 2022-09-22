import React from 'react';
import { Link, graphql } from 'gatsby';

const ArticleCard = ({ article }) => {
  console.log('article', article);
  return (
    <Link
      to={`/article/${article.data.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <img
        src={article?.data?.cover?.url}
        alt={article?.data?.cover?.file_name}
        className="object-cover h-72 w-full"
      />
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.data.title}</h3>
        <p className="line-clamp-2 mt-2 text-neutral-500">
          {article.data.text}
        </p>
      </div>
    </Link>
    // <a href="hello">hello</a>
  );
};

export default ArticleCard;
