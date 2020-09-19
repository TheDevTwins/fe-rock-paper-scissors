import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

//import { Spin } from 'antd';
import {
  connectToSessionSocket,
  disconnectFromSessionSocket,
  retrieveSession,
} from 'state';

import { Logo, Chat } from 'components';
import UserCustomization from './UserCustomization';
import UserList from './UserList';
import ShareLink from './ShareLink';

const Lobby: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams() as any;

  useEffect(() => {
    dispatch(connectToSessionSocket('', id));
    dispatch(retrieveSession({ id: id }));

    return () => {
      dispatch(disconnectFromSessionSocket('', id));
    };
  }, [dispatch, id]);

  return (
    <div className="lobby defaultBg">
      <header className="wrapper lobby__header">
        <Logo />
        <div className="startGame">Start Game</div>
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
