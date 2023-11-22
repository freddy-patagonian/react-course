import './index.css';

import React from 'react';

import Player from './components/Player';
import GlobalStyle from './global-style';

function App() {
  return (
    <>
      <GlobalStyle />
      <main id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game Board
      </main>
    </>
  );
}

export default App;
