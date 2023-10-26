import React from 'react';
import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/selectors/app.selector';
import { Button, Stack } from '@mui/material';

export const Home = () => {
  const isInitialize = useSelector(appSelector.isInitialize);

  return <>
    <h4>App initialized: {isInitialize ? 'Yes' : 'No'}</h4>
    <Stack>
      <Button variant="contained" color="primary" >
        Hello World
      </Button>
    </Stack>
  </>;
};
