import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import { PICKS, selectors, makePick } from 'state';

const Picks: React.FC = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectors.currentPlayer);

  const [pick, setPick] = useState('');

  return (
    <div>
      {Object.entries(PICKS).map(([key, name]) => (
        <Button
          key={key}
          onClick={() => {
            dispatch(makePick({ pick: parseInt(key) }));
            setPick(key);
          }}
          disabled={!!pick}
          type={pick === key ? 'primary' : undefined}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default Picks;
