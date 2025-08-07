import React from 'react';
import PostHeading from '../PostHeading';
import { PostModel } from '@/models/post/post-model';
import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime';

type PostDetailsProps = {
  post: PostModel;
};

export default function PostDetails({ post }: PostDetailsProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={post.createdAt}
        title={formatDateTime(post.createdAt)}
      >
        {formatDistanceToNow(post.createdAt)}
      </time>

      <PostHeading url={`/post/${post.slug}`} as='h2'>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
}
