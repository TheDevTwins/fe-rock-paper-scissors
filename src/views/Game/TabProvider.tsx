import React, { createContext, useContext, useReducer } from 'react';

import { State, Action } from './types';

import { Chat } from 'components';
import Settings from './Settings';
import SettingsIcon from 'assets/images/settings.png';
import ChatIcon from 'assets/images/chat.png';

const CHAT = { key: 'Chat', value: <Chat />, icon: ChatIcon };
const SETTINGS = {
  key: 'Settings',
  value: <Settings />,
  icon: SettingsIcon,
};

const TABS = [CHAT, SETTINGS];

const defaultValues = {
  tabs: TABS,
  option: TABS[0].key,
};

const TabStateContext = createContext<State>(defaultValues);
const TabDispatchContext = createContext(0 as any);

const tabReducer = (state: State, action: Action) => {
  return { ...state, option: action.option };
};

const useTabState = () => {
  return useContext(TabStateContext);
};

const useTabDispatch = () => {
  return useContext(TabDispatchContext);
};

const TabProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(tabReducer, defaultValues);
  return (
    <TabStateContext.Provider value={state}>
      <TabDispatchContext.Provider value={dispatch}>
        {children}
      </TabDispatchContext.Provider>
    </TabStateContext.Provider>
  );
};

export { TabProvider, useTabState, useTabDispatch };
