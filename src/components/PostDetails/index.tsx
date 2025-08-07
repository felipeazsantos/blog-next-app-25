import React from 'react';
import PostHeading from '../PostHeading';
import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime';

type PostDetailsProps = {
  postHeading: 'h1' | 'h2';
  link: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export default function PostDetails({
  postHeading,
  link,
  createdAt,
  title,
  excerpt,
}: PostDetailsProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={createdAt}
        title={formatDateTime(createdAt)}
      >
        {formatDistanceToNow(createdAt)}
      </time>

      <PostHeading url={link} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
