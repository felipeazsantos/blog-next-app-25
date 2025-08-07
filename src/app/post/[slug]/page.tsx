import { findPostBySlugCached } from '@/lib/post/queries';
import { notFound } from 'next/navigation';
import React from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return <div>{post.title}</div>;
}
