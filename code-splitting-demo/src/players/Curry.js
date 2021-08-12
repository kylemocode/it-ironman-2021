import React from 'react';

import TwoPointsShotting from '../skills/TwoPointsShotting';
import ThreePointsShotting from '../skills/threePointsShotting';

const Curry = () => {
  return (
    <>
      <h3>Curry</h3>
      <ul>
        <TwoPointsShotting />
        <ThreePointsShotting />
      </ul>
    </>
  );
};

export default Curry;
