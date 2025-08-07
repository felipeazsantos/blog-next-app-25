import PostFeatured from '@/components/PostFeatured';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div className='min-h-screen'>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </div>
  );
}
