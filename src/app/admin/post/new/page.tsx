import ManagedPostForm from '@/components/admin/ManagedPostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar Post</h1>
      <ManagedPostForm />
    </>
  );
}
