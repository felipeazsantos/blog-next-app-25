import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  console.log('teste');

  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);

    console.log(
      `\nseed de ${posts.length} salvos na base de dados com sucesso,`,
    );
  } catch (e) {
    console.log('\nOcorreu um erro...\n', e);
  }
})();
