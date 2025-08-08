'use client';

import ErrorMessage from '@/components/ErrorMessage';
import React, { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='500'
      content='ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde'
    />
  );
}
