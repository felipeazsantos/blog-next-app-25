import Container from '@/components/Container';
import Header from '@/components/Header';
import PostHeading from '@/components/PostHeading';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href={'#'}>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src={'/images/bryen_0.png'}
            height={1200}
            width={720}
            alt='Título do post'
            priority
          />
        </Link>
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
