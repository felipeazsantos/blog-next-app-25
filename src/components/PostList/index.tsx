import React from 'react';
import { postRepository } from '@/repositories/post';
import PostCoverImage from '../PostCoverImage';
import PostDetails from '../PostDetails';

export default async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => (
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

          <PostDetails post={post} />
        </div>
      ))}
    </div>
  );
}
