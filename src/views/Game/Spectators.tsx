import React from 'react';
import { useSelector } from 'react-redux';

import { selectors, SPECTATOR } from 'state';

const Spectators: React.FC = () => {
  const spectators = useSelector(selectors.playersList).filter(
    p => p.player_type === SPECTATOR
  );

  return (
    <div>
      <ul>
        {spectators.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Spectators;
