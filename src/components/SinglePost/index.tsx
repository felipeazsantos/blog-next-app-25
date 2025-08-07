import { findPostBySlugCached } from '@/lib/post/queries';
import React, { Suspense } from 'react';
import { SpinLoader } from '../SpinLoader';
import Image from 'next/image';
import PostHeading from '../PostHeading';
import PostTime from '../PostTime';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <article className='mb-16'>
        <header className='group flex flex-col gap-4 mb-4'>
          <Image
            className='rounded-xl'
            src={post.coverImageUrl}
            alt={post.title}
            width={1200}
            height={720}
          />
          <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
          <p>
            {post.author} | <PostTime dateTime={post.createdAt} />
          </p>
        </header>

        <p className='text-lg mb-4 text-slate-600 italic'>{post.excerpt}</p>

        <div>{post.content}</div>
      </article>
    </Suspense>
  );
}
