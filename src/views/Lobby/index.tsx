import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Logo, Chat } from 'components';
import UserCustomization from './UserCustomization';
import UserList from './UserList';
import ShareLink from './ShareLink';

import { connectToSessionSocket, disconnectFromSessionSocket } from 'state';

const Lobby: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams() as any;

  useEffect(() => {
    dispatch(connectToSessionSocket('', id));

    return () => {
      dispatch(disconnectFromSessionSocket('', id));
    };
  }, [dispatch, id]);

  return (
    <div className="lobby defaultBg">
      <header className="wrapper lobby__header">
        <Logo />
        <ShareLink />
      </header>
      <div className="wrapper">
        <div className="lobby__panels">
          <div className="lobby__panel">
            <div className="lobby__title">Player</div>
            <UserCustomization />
          </div>
          <div className="lobby__panel">
            <div className="lobby__title">Lobby</div>
            <div className="lobby__playerSection">
              <UserList />
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
