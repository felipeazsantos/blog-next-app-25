import SinglePost from '@/components/SinglePost';
import { findPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import React from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return <SinglePost slug={slug} />;
}
