import { Anchor } from '@c/atom';
import React from 'react';

const Artists = () => {
  return (
    <div>
      <h1>This is the artists page</h1>
      <Anchor title='go back home' href='/'>
        Go back home
      </Anchor>
    </div>
  );
};

export default Artists;
