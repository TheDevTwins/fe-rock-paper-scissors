import React from 'react';

import { Tab } from './types';

type props = {
  tabs: Tab[];
  option: string; // The selected key
};

const Tabs: React.FC<props> = ({ tabs, option }) => {
  const displayedTab = (() => {
    for (const tab of tabs) {
      if (tab.key === option) {
        return tab.value;
      }
    }
    return tabs[0].value;
  })();

  return (
    <div className="tabs">
      <div className="tabs__tab">{displayedTab}</div>
    </div>
  );
};
export default Tabs;
