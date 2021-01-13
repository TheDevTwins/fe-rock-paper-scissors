import React from 'react';

import { useTabState } from './TabProvider';

const TabDislay: React.FC = () => {
  const { tabs, option } = useTabState();

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
export default TabDislay;
