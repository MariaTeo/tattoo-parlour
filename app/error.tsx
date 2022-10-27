'use client';

import { useEffect } from 'react';

interface IErrorPage {
  error: Error;
}
const ErrorPage = ({ error }: IErrorPage) => {
  useEffect(() => {
    console.error('Error: ', error.message);
  });

  return (
    <div>
      <h1>Error! Error! Error!</h1>
      <p>We will work to fix it</p>
    </div>
  );
};

export default ErrorPage;
