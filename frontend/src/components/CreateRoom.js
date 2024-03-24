import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

function CreateRoom() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const {
    update = false,
    roomCode = '',
    guestCanPause = false,
    votesToSkip = 2,
  } = state || {};
  const [canPause, setCanPause] = useState(guestCanPause);
  const [votes, setVotes] = useState(votesToSkip);

  const handleVotesChange = (e) => {
    setVotes(e.target.value);
  }

  const handleCanPause = (e) => {
    setCanPause(e.target.value === 'true' ? true: false);
  }

  const handleSubmit = async () => {
    const options = {
      method: update ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: votes,
        guest_can_pause: canPause,
        ...{ code: roomCode },
      }),
    };

    const url = `/api/${update ? 'update-room' : 'create-room'}`;
    const request = await fetch(url, options);
    const json = await request.json();
    const redirectUrl = update ? -1 : `/room/${json.code}`;
    navigate(redirectUrl);
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          {update ? 'Update' : 'Create'} Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">
              Guest Music Control
            </div>
          </FormHelperText>
          <RadioGroup
            row
            defaultValue={canPause}
            onChange={handleCanPause}
          >
            <FormControlLabel
              value={true}
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={false}
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            defaultValue={votesToSkip}
            inputProps={{
              min: 1,
              style: {
                textAlign: "center",
              }
            }}
            onChange={handleVotesChange}
          />
          <FormHelperText>
            <div align="center">Votes required to skip song</div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          {update ? "Update Room Setting" : "Create a Room"}
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="secondary"
          variant="contained"
          to={update ? -1 : "/"}
          component={Link}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateRoom;
