import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, PLAYER, PICKS, PLAYER_STATES } from 'state';

import { Player } from 'state';

const Players: React.FC = () => {
  // const players = useSelector(selectors.playersList).filter(
  //   p => p.player_type === PLAYER
  // );

  type styles = {
    width: string;
    height: string;
  };

  const grid = useRef(document.createElement('div'));
  const [styles, setStyles] = useState<styles>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [limits, setLimits] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [gap, setGap] = useState(50);

  // Ratio effect
  useEffect(() => {
    const createGrid = () => {
      let newRatio = 0;
      while (players.length > Math.pow(newRatio, 2)) newRatio++;
      setRatio(newRatio);

      const totalGap = (newRatio - 1) * gap;

      //gets the size of a square
      const getSize = (size: number) => {
        return (size - totalGap) / newRatio;
      };

      const newLimits = Math.min(
        grid.current.clientWidth,
        grid.current.clientHeight
      );
      const size = getSize(newLimits);
      setLimits(newLimits);

      setStyles({
        width: size + 'px',
        height: size + 'px',
      });
    };
    window.addEventListener('resize', createGrid);

    createGrid();

    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, [players, limits]);

  return (
    <div ref={grid} className="playerList">
      <button
        className="playerList__demo"
        onClick={() => {
          setPlayers([
            ...players,
            {
              id: 36,
              player_type: 1,
              name: '',
              state: 0,
              is_admin: 0,
              pick: 0,
              points: 10,
              avatar: { hat: 0, face: 0, skin: 0, shirt: 0 },
            },
          ]);
        }}
      >
        Click me
      </button>
      <div
        style={{ width: limits + 'px', height: limits + 'px' }}
        className="playerList__container"
      >
        {players.map((player, i) => (
          <div
            key={i}
            style={{
              ...styles,
              marginRight:
                (i + 1) % ratio == 0 || i == players.length - 1
                  ? 0
                  : gap + 'px',
              marginBottom: i >= (ratio - 1) * ratio ? 0 : gap + 'px',
            }}
            className="playerCard"
          >
            <div className="playerCard__avatar"></div>
            <div className="playerCard__name">{player.name}</div>
            <div className="playerCard__stats">
              {/* heart */}
              {/* selection */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
