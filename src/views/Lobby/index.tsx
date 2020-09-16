import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Spin } from 'antd';
import { connectToSessionSocket, disconnectFromSessionSocket } from 'state';

import { Logo, Chat } from 'components';
import UserCustomization from './UserCustomization';
import UserList from './UserList';
import ShareLink from './ShareLink';

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
            <div className="lobby__title">
              Lobby
              <div className="status">
                Waiting for players to join
                {/* <Spin className="status__spinner" spinning={true}></Spin> */}
              </div>
            </div>
            <UserList />
            <div className="admin">
              <div className="admin__start">Start Game</div>
            </div>
          </div>
          <div className="lobby__panel">
            <div className="lobby__title">Chat</div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
