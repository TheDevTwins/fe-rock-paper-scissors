import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'state';

const UserList: React.FC = () => {
  const players = useSelector(selectors.playersList);
  console.log(players);
  return null;
};

export default UserList;
