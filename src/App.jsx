import React from 'react';
import { RecoilRoot } from 'recoil';

import { Counter } from './Counter';
import { CharacterCount } from './CharacterCount';

function App() {
  return (
    <RecoilRoot>
      <h2>Counter Example</h2>
      <Counter />
      <h2>Character Count Example</h2>
      <CharacterCount />
    </RecoilRoot>
  );
}

export default App;
