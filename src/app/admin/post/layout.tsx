import MenuAdmin from '@/components/admin/MenuAdmin';
import React from 'react';

interface AdminPostLayoutProps {
  children: React.ReactNode;
}

export default function AdminPostLayout({ children }: AdminPostLayoutProps) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
