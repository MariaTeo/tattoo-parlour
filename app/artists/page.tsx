import { Nav } from '@c/molecule';
import { Anchor } from '@c/atom';
import React from 'react';

const getTattooData = async () => {
  const props: { navMenu: {} } = await (
    await fetch(
      'https://raw.githubusercontent.com/mariateo/tattoo-parlour/main/tattoo-parlour.data.json'
    )
  ).json();
  return props;
};

const Artists = async () => {
  return (
    <>
      <h1>This is the artists page</h1>
      <Anchor title='go back home' href='/'>
        Go back home
      </Anchor>
    </>
  );
};

export default Artists;
