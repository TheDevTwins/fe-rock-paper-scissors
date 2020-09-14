import React from 'react';
import Clipboard from 'react-clipboard.js';

import { CopyFilled } from '@ant-design/icons';

const ShareLink: React.FC = () => {
  const link = window.location.href;
  return (
    <div className="shareLink">
      <div className="shareLink__text">Share this link:</div>
      <div className="shareLink__link">{link}</div>
      <Clipboard className="shareLink__btn" data-clipboard-text={link}>
        <CopyFilled />
      </Clipboard>
    </div>
  );
};

export default ShareLink;
