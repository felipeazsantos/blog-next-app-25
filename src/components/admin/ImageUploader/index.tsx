'use client';

import Button from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  return (
    <div className='flex flex-col gap-2 pt-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        <ImageUpIcon />
        Enviar uma imagem
      </Button>

      <input
        ref={fileInputRef}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
      />
    </div>
  );
};

export default ImageUploader;
