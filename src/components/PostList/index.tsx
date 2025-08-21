import React from 'react';
import PostCoverImage from '../PostCoverImage';
import PostDetails from '../PostDetails';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export default async function PostList() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 1) return null;

  return (
    <div className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => (
        <div key={post.id} className='flex flex-col gap-4 group'>
          <PostCoverImage
            linkProps={{ href: `/post/${post.slug}` }}
            imageProps={{
              src: post.coverImageUrl,
              width: 1200,
              height: 700,
              alt: post.title,
            }}
          />

          <PostDetails
            postHeading='h1'
            link={`/post/${post.slug}`}
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
