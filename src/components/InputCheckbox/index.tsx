import clsx from 'clsx';
import React, { useId } from 'react';

type InputTextProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export default function InputCheckbox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputTextProps) {
  const id = useId();

  return (
    <div className='flex items-center gap-3'>
      <input
        {...props}
        className={clsx(
          'w-4 h-4 online-0 focus:ring-2 focus:ring-slate-800',
          props.className,
        )}
        id={id}
        type={type}
      />

      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}
