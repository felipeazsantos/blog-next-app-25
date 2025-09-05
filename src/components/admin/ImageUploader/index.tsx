'use client';

import Button from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.item(0);

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`imagem muito grande. Max.: ${readableMaxSize}KB.`);

      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-2 pt-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        <ImageUpIcon />
        Enviar uma imagem
      </Button>

      <input
        ref={fileInputRef}
        onChange={handleChange}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
      />
    </div>
  );
};

export default ImageUploader;
