export const dynamic = 'force-dynamic';

interface AdminPostIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  return <div className='py-16 text-6xl'>Admin Post {id} Page</div>;
}
