import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPostByIdAdmin = cache(
  async (id: string): Promise<PostModel> => {
    return await postRepository.findById(id);
  },
);

export const findAllPostAdmin = cache(async (): Promise<PostModel[]> => {
  return await postRepository.findAll();
});
