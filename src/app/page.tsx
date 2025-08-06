import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import React, { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
      </footer>
    </div>
  );
}
