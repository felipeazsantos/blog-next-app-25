import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime';
import React from 'react';

type PostTimeProps = {
  dateTime: string;
};

export default function PostTime({ dateTime }: PostTimeProps) {
  return (
    <time
      className='text-slate-600 text-sm/tight'
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
