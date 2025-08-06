import Container from '@/components/Container';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import React, { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a header</h1>
      </header>

      <p className='text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        quibusdam quaerat, suscipit, tempore harum impedit magni sunt illum
        nesciunt similique veniam reiciendis ullam necessitatibus sequi
        repudiandae doloribus! Eum, natus rerum.
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
      </footer>
    </Container>
  );
}
