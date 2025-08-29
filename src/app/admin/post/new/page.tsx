import InputText from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='flex flex-col gap-4 flex-wrap'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <InputText
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          disabled
        />
      </div>
    </>
  );
}
