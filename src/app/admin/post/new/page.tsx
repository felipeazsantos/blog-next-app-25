import Button from '@/components/Button';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='py-16 flex gap-4 flex-wrap'>
        <Button variant='default' size='sm'>
          <BugIcon />
          Test
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon />
          Test
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon />
          Test
        </Button>
        <Button variant='default'>
          <BugIcon />
          Test
        </Button>
      </div>
      <div className='py-16 flex gap-4 flex-wrap'>
        <Button variant='default' size='sm' disabled>
          <BugIcon />
          Test
        </Button>
        <Button variant='ghost' size='md' disabled>
          <BugIcon />
          Test
        </Button>
        <Button variant='danger' size='lg' className='w-full' disabled>
          <BugIcon />
          Test
        </Button>
        <Button variant='default' disabled>
          <BugIcon />
          Test
        </Button>
      </div>
    </>
  );
}
