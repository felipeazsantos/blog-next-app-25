import React from 'react';
import PostDetails from '../PostDetails';
import PostCoverImage from '../PostCoverImage';
import { postRepository } from '@/repositories/post';

export default async function PostFeatured() {
  const post = await postRepository.findById(
    '3993fcf7-2490-48ed-be2e-58c2030ee764',
  );

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: `/post/${post.slug}` }}
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
        link={`/post/${post.slug}`}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
