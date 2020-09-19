import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

  const chatList = useRef(document.createElement('div'));

  useEffect(() => {
    const elem = chatList?.current;
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  });

  const [messageInput, setMessageInput] = useState('');
  const handleSendMessage = () => {
    if (messageInput) {
      dispatch(sendMessage({ message: messageInput }));
      setMessageInput('');
    }
  };

  return (
    <div className="chat">
      <div className="chat__container">
        <div ref={chatList} className="chat__list">
          {messages.map((msg, i) => {
            const first = messages[i].player_id != messages[i - 1]?.player_id;
            const last = messages[i].player_id != messages[i + 1]?.player_id;
            const middle = !first && !last;
            return (
              <div
                key={i}
                className={`chat__item 
                  ${msg.player_id === currentPlayer.id ? 'right' : ''} 
                  ${last ? 'last' : middle ? 'middle' : 'first'}
                `}
              >
                <div className="chat__avatar">
                  {messages[i].player_id != messages[i - 1]?.player_id ? (
                    <Avatar
                      {...offlinePlayers[msg.player_id]?.avatar}
                      {...players[msg.player_id]?.avatar}
                    />
                  ) : (
                    ' '
                  )}
                </div>
                <div className="chat__bubble">{msg.message}</div>
              </div>
            );
          })}
        </div>
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
