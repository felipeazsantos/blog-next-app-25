import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = unstable_cache(
  cache(async (): Promise<PostModel[]> => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  {
    tags: ['posts'],
  },
);

export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string): Promise<PostModel> => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    }),
    ['posts'],
    {
      tags: [`posts/${slug}`],
    },
  )(slug);
