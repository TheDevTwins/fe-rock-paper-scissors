import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import { PICKS, selectors, makePick } from 'state';

const Picks: React.FC = () => {
  const dispatch = useDispatch();
  //const { timer } = useSelector(selectors.session);

  const [pick, setPick] = useState('');

  // useEffect(() => {
  //   if (!timer) setPick('');
  // }, [timer]);

  return (
    <div className="picks">
      {Object.entries(PICKS).map(([key, name]) => (
        <Button
          className="picks__btn"
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
