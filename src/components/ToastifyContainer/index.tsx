'use client';

import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

export default function ToastifyContainer() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  );
}
