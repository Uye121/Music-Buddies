import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function RoomJoin() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState(null);
  const [error, setError] = useState(null);

  const handleFieldChange = (e) => {
    setRoomCode(e.target.value);
  };

  const handleButtonClick = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: roomCode }),
    };
    try {
      const response = await fetch('/api/join-room', options);
      if (response.ok) {
        navigate(`/room/${roomCode}`);
      } else {
        setError('Room not found');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4" align="center">
          Join a room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
        error={error}
        label="Code"
        placeholder="Enter a room code"
        value={roomCode}
        helperText={error}
        variant="outlined"
        onChange={handleFieldChange}
      />
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomJoin;
