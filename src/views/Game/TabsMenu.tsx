import { Tabs } from 'antd';
import { Chat } from 'components';
import React from 'react';

import SettingsIcon from 'assets/images/settings.png';
import ChatIcon from 'assets/images/chat.png';

type props = {
  className?: string;
};

const TabsMenu: React.FC<props> = ({ className }) => {
  const { TabPane } = Tabs;

  const makeTabIcon: (images: string) => JSX.Element = image => {
    return <img className="ant-tabs-icon" src={image} alt="icon" />;
  };

  return (
    <div className={className}>
      <Tabs tabPosition="left">
        <TabPane tab={makeTabIcon(ChatIcon)} key="1">
          <Chat />
        </TabPane>
        <TabPane tab={makeTabIcon(SettingsIcon)} key="2">
          Content of
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsMenu;
