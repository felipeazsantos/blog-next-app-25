import Container from '@/components/Container';
import Header from '@/components/Header';
import PostCoverImage from '@/components/PostCoverImage';
import PostHeading from '@/components/PostHeading';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import React, { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '#' }}
          imageProps={{
            src: '/images/bryen_5.png',
            width: 1200,
            height: 700,
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-08-06'
          >
            08/06/2025 10:00
          </time>

          <PostHeading url='#' as='h1'>
            Lorem ipsum dolor sit amet
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sed
            vel nulla consequuntur maiores, pariatur necessitatibus. Accusantium
            porro accusamus labore earum officiis, quidem, iste temporibus iure
            tempora repellat placeat recusandae!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
      </footer>
    </Container>
  );
}
