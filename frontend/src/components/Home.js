import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
} from '@mui/material'

function Home() {
  const [roomCode, setRoomCode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user-in-room');
      const json = await response.json();
      setRoomCode(json.code);
      if (json.code) {
        navigate(`room/${json.code}`, { replace: true });
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          Music Buddies
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" to="/join" component={Link}>
            Join a room
          </Button>
          <Button color="secondary" to="/create" component={Link}>
            Create a room
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
};

export default Home;
