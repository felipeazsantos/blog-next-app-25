import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  async (): Promise<PostModel[]> => {
    return await postRepository.findAllPublic();
  },
);

export const findPostBySlugCached = cache(
  async (slug: string): Promise<PostModel> => {
    return await postRepository.findBySlug(slug);
  },
);

export const findPostByIdCached = cache(
  async (id: string): Promise<PostModel> => {
    return await postRepository.findById(id);
  },
);
