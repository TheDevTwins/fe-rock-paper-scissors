import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Row, Col } from 'antd';
import { selectors, PLAYER, PICKS, PLAYER_STATES } from 'state';

const Players: React.FC = () => {
  const players = useSelector(selectors.playersList).filter(
    p => p.player_type === PLAYER
  );

  return (
    <div>
      <Row>
        {players.map(player => (
          <Col span={6} key={player.id}>
            <Card>
              <p>name: {player.name}</p>
              <p>points: {player.points}</p>
              <p>pick: {player.pick ? 'picked' : 'picking'}</p>
              <p>state: {PLAYER_STATES[player.state as 0]}</p>
              <p>pick: {PICKS[player.pick as 0]}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Players;
