'use client';

import Button from '@/components/Button';
import InputCheckbox from '@/components/InputCheckbox';
import InputText from '@/components/InputText';
import MarkdownEditor from '@/components/MarkdownEditor';
import React, { useState } from 'react';

export default function ManagedPostForm() {
  const [value, setValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <InputCheckbox labelText='Sobrenome' />

        <MarkdownEditor
          labelText='Conteúdo'
          value={value}
          setValue={setValue}
          textAreaName='content'
          disabled={false}
        />
      </div>

      <div className='mt-4'>
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  );
}
