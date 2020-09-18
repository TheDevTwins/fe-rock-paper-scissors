import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, sendMessage } from 'state';
import { Avatar } from 'components';

import { SendOutlined } from '@ant-design/icons';

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectors.localMessages);
  const players = useSelector(selectors.players);
  const offlinePlayers = useSelector(selectors.offlinePlayers);
  const currentPlayer = useSelector(selectors.currentPlayer);

  const [messageInput, setMessageInput] = useState('');
  const handleSendMessage = () => {
    if (messageInput) {
      dispatch(sendMessage({ message: messageInput }));
      setMessageInput('');
    }
  };

  return (
    <div className="chat">
      <div className="chat__list">
        {messages.map((msg, i) => {
          return (
            <div
              key={i}
              className={`chat__item ${
                msg.player_id === currentPlayer.id ? 'right' : ''
              }`}
            >
              <div className="chat__avatar">
                <Avatar
                  {...offlinePlayers[msg.player_id]?.avatar}
                  {...players[msg.player_id]?.avatar}
                />
              </div>
              <div className="chat__bubble">{msg.message}</div>
            </div>
          );
        })}
      </div>
      <div className="chat__actions">
        <input
          value={messageInput}
          type="text"
          placeholder="Chat"
          className="chat__input"
          onChange={e => {
            setMessageInput(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <div className="chat__send" onClick={handleSendMessage}>
          <SendOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
