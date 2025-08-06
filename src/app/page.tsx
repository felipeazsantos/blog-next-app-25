import Container from '@/components/Container';
import Header from '@/components/Header';
import PostFeatured from '@/components/PostFeatured';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import React, { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
      </footer>
    </Container>
  );
}
