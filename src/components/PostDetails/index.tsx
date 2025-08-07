import React from 'react';
import PostHeading from '../PostHeading';
import PostTime from '../PostTime';

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
      <PostTime dateTime={createdAt} />

      <PostHeading url={link} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
