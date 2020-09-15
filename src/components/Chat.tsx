import React from 'react';

import { Avatar } from 'components';

import { SendOutlined } from '@ant-design/icons';

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <div className="chat__list">
        <div className="chat__item">
          <div className="chat__avatar">
            <Avatar hat={0} face={0} skin={0} shirt={0} />
          </div>
          <div className="chat__bubble">Hi</div>
        </div>
        <div className="chat__item right">
          <div className="chat__avatar">
            <Avatar hat={0} face={0} skin={0} shirt={0} />
          </div>
          <div className="chat__bubble">rude cunt</div>
        </div>
      </div>
      <div className="chat__actions">
        <input type="text" placeholder="Chat" className="chat__input" />
        <div className="chat__send">
          <SendOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
