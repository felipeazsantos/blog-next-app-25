import React from 'react';
import PostDetails from '../PostDetails';
import PostCoverImage from '../PostCoverImage';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';
import ErrorMessage from '../ErrorMessage';

export default async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle='Ops...'
        content='Ainda não criamos nenhum post.'
      />
    );

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
