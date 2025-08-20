import React from 'react';
import PostDetails from '../PostDetails';
import PostCoverImage from '../PostCoverImage';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export default async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 700,
          alt: post.title,
          priority: true,
        }}
      />

      <PostDetails
        postHeading='h1'
        link={postLink}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
