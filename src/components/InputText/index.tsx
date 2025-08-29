import clsx from 'clsx';
import React, { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export default function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        className={clsx(
          'bg-white outline-0 text-base/tight',
          'ring-2 ring-slate-400 rounded-sm',
          'p-2 focus:ring-slate-800',
          'placeholder-slate-300',
          'disabled:bg-slate-200',
          'disabled:text-slate-400',
          'disabled:placeholder-slate-300',
          'read-only:bg-slate-100',
          props.className,
        )}
        id={id}
      />
    </div>
  );
}
