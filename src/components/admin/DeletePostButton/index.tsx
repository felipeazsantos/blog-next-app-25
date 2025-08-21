'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import React, { useTransition } from 'react';

interface DeletePostButtonProps {
  id: string;
  title: string;
}

function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm('tem certeza?')) return;

    startTransition(async () => {
      const result = await deletePostAction(id);
      console.log(`o result é: ${result}`);
    });
  }

  return (
    <button
      className={clsx(
        'text-red-500',
        'cursor-pointer',
        'transition',
        '[&_svg]:w-4',
        '[&_svg]:h-4',
        'hover:scale-120',
        'hover:text-red-700',
        'disabled:text-slate-400 disabled:cursor-not-allowed',
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}

export default DeletePostButton;
