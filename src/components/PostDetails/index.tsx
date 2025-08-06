import React from 'react';
import PostHeading from '../PostHeading';
import { PostModel } from '@/models/post/post-model';

type PostDetailsProps = {
  post: PostModel;
};

export default function PostDetails({ post }: PostDetailsProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={post.createdAt}
      >
        {post.createdAt}
      </time>

      <PostHeading url='#' as='h2'>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
}
