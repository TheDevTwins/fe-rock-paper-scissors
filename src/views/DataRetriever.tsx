import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  connectToSessionSocket,
  disconnectFromSessionSocket,
  retrieveSession,
} from 'state';

const DataRetriever: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams() as any;

  useEffect(() => {
    dispatch(connectToSessionSocket('', id));
    dispatch(retrieveSession({ id: id }));

    return () => {
      dispatch(disconnectFromSessionSocket('', id));
    };
  }, [dispatch, id]);

  return null;
};

export default DataRetriever;
