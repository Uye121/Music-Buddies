import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import Room from './Room';

function App() {
  return (
    <div className='center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="join" element={<RoomJoin />} />
          <Route path="create" element={<CreateRoom />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = document.getElementById('app');
render(<App />, root);
