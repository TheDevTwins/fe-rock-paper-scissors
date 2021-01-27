import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import { PICKS, ICONS, selectors, makePick } from 'state';

const Picks: React.FC = () => {
  const dispatch = useDispatch();
  const { timer } = useSelector(selectors.session);

  const [pick, setPick] = useState('');

  useEffect(() => {
    if (!timer) setPick('');
  }, [timer]);

  return (
    <div className="picks">
      {Object.entries(ICONS).map(([key, icon]) => {
        return (
          <Button
            className={`picks__btn ${pick === key ? 'active' : ''}`}
            key={key}
            onClick={() => {
              dispatch(makePick({ pick: parseInt(key) }));
              setPick(key);
            }}
            disabled={!!pick}
            type={pick === key ? 'primary' : undefined}
          >
            <img
              className="picks__icon"
              src={icon}
              alt={Object.values(PICKS)[parseInt(key)]}
            />
          </Button>
        );
      })}
    </div>
  );
};

export default Picks;
