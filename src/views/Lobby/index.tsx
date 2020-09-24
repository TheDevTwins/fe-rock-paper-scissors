import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Tabs } from 'antd';
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

  // Define window size breakpoints
  const [panelState, setPanelState] = useState(2);
  const intervals = [0, 1010, 1490, 99999]; // pixel breakpoints i decided are good

  // Update interval only if it has changed
  const updatePanelState = () => {
    const width = window.innerWidth;
    const getInterval = (index: number) =>
      width >= intervals[index] && width < intervals[index + 1];
    if (!getInterval(panelState)) {
      for (let i = 0; i < intervals.length - 1; i++) {
        if (getInterval(i)) {
          setPanelState(i);
        }
      }
    }
  };
  // Call it on launch since its a resize event
  updatePanelState();
  window.addEventListener('resize', updatePanelState);

  // Panel data

  type Panel = {
    title: string;
    titleAdd?: JSX.Element;
    content: JSX.Element;
  };

  const panels: Panel[] = [
    { title: 'Player', content: <UserCustomization /> },
    {
      title: 'Lobby',
      content: <UserList />,
      titleAdd: <div className="status">Waiting for players to join</div>,
    },
    { title: 'Chat', content: <Chat /> },
  ];

  const createDefaultPanel = (index: number, key: number) => {
    return (
      <div className="lobby__panel" key={key}>
        <div className="lobby__title">
          {panels[index].title}
          {panels[index].titleAdd}
        </div>
        {panels[index].content}
      </div>
    );
  };
  const createTabsPanel = (children: number[], key = 0) => {
    return (
      <div className="lobby__panel" key={key}>
        <Tabs defaultActiveKey="1">
          {children.map(index => {
            return (
              <TabPane tab={panels[index].title} key={index.toString()}>
                {panels[index].content}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  };

  const { TabPane } = Tabs;

  const createMockup = () => {
    switch (panelState) {
      case 0:
        return (
          <div className="lobby__panels">{createTabsPanel([0, 1, 2])}</div>
        );
      case 1: {
        return (
          <div className="lobby__panels">
            {createDefaultPanel(0, 0)}
            {createTabsPanel([1, 2], 1)}
          </div>
        );
      }
      default: {
        return (
          <div className="lobby__panels">
            {panels.map((panel, i) => {
              return createDefaultPanel(i, i);
            })}
          </div>
        );
      }
    }
  };

  const mockup = createMockup();

  return (
    <div className="lobby defaultBg">
      <header className="wrapper lobby__header">
        <Logo />
        <div className="startGame">Start Game</div>
        <ShareLink />
      </header>
      <div className="wrapper">{mockup}</div>
    </div>
  );
};

export default Lobby;
