import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Grid,
  Button,
  Typography,
} from '@mui/material';
import MusicPlayer from './MusicPlayer';

function Room() {
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [isHost, setIsHost] = useState(false);
  const [song, setSong] = useState({});
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
  const { roomCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setupRoom();

    console.log(spotifyAuthenticated);
    console.log("interval...");
    // Get song info every x ms
    const interval = setInterval(getCurrentSong, 1500);
    
    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const setupRoom = async () => {
    const response = await fetch(`/api/get-room?code=${roomCode}`);
    if (!response.ok) {
      navigate('/');
    }

    const json = await response.json();
    const { votes_to_skip, guest_can_pause, is_host } = json;

    setVotesToSkip(votes_to_skip);
    setGuestCanPause(guest_can_pause);
    setIsHost(is_host);

    if (is_host && !spotifyAuthenticated) {
      console.log("authenticated");
      await authenticateSpotify();
      await getCurrentSong();
    }
    console.log("spotify auth: ", spotifyAuthenticated);
  };

  const authenticateSpotify = async () => {
    let response = await fetch('/spotify/is-authenticated');
    let data = await response.json();
    setSpotifyAuthenticated(data.status);

    if (!data.status) {
      response = await fetch('/spotify/get-auth-url');
      data = await response.json();
      setSpotifyAuthenticated(true);
      window.location.replace(data.url);
    }
  }

  const onLeaveButtonPress = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    await fetch('/api/leave-room', options);
    navigate('/');
  }

  const getCurrentSong = async () => {
    const response = await fetch('/spotify/current-song');
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data);
    setSong(data);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <MusicPlayer {...song} />
      {isHost ? (
        <Grid item xs={12} align="center">
          <Button
            variant="contained" 
            color="primary" 
            onClick={() =>
              navigate(
                '/create',
                {
                  state: {
                    update: true,
                    roomCode,
                    guestCanPause,
                    votesToSkip,
                  }
                }
              )}
          >
            Settings
          </Button>
        </Grid>
      ) : null
      }
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" onClick={onLeaveButtonPress}>
          Leave Room
        </Button>
      </Grid>
    </Grid>
  )
};

export default Room;
