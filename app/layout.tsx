import { ReactNode } from 'react';

interface AppInterface {
  children: ReactNode;
}

const Base = ({ children }: AppInterface) => {
  return (
    <html>
      <head>
        <title>Welcome to Tattoo Parlour</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </head>

      <body>{children}</body>
    </html>
  );
};

export default Base;
