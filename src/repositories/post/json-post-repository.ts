import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
}

export const postRepository = new JsonPostRepository();

console.log(ROOT_DIR);
