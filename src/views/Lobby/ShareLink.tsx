import React, { useEffect, useLayoutEffect, useState } from 'react';
import Clipboard from 'react-clipboard.js';

import { CopyFilled } from '@ant-design/icons';
import { useParams } from 'react-router';

const ShareLink: React.FC = () => {
  const link = window.location.href;
  const { id } = useParams() as any;

  const currentBreakpointState = () =>
    window.matchMedia('(max-width: 78em)').matches;
  const [breakpointState, setBreakpointState] = useState(
    currentBreakpointState()
  );

  useLayoutEffect(() => {
    const updateBreakpoint = () => {
      const br = currentBreakpointState();
      if (breakpointState != br) {
        setBreakpointState(br);
      }
    };

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  });

  return (
    <div className="shareLink">
      <div className="shareLink__text">
        {breakpointState ? 'Lobby id: ' : 'Share this link: '}
      </div>
      <div className="shareLink__link">{breakpointState ? id : link}</div>
      <Clipboard className="shareLink__btn" data-clipboard-text={link}>
        <CopyFilled />
      </Clipboard>
    </div>
  );
};

export default ShareLink;
