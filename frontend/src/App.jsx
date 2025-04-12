import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './home_login';
import Header from './component/head';
import Loadmap from './component/Loadmap';
import Mypage from './component/mypage';
import Signup from './component/signup';

import Build09 from './number_09/build_09';
import Build56 from './number_56/build_56';
import Build06 from './number_06/build_06';
import Build04 from './number_04/build_04';
import Build05 from './number_05/build_05';
import Build11 from './number_11/build_11';
import Build02 from './number_02/build_02';
import Build03 from './number_03/build_03';
import Build26 from './number_26/build_26';

import Room090425 from './number_09/4F/room090425';
import Room090106 from './number_09/1F/room090106';
import Room090119 from './number_09/1F/room090119';
import Room090219 from './number_09/2F/room090219';
import Room090320 from './number_09/3F/room090320';
import Room090327 from './number_09/3F/room090327';
import Room090408 from './number_09/4F/room090408';
import Room090409 from './number_09/4F/room090409';
import Room090410 from './number_09/4F/room090410';
import Room090411 from './number_09/4F/room090411';
import Room090420 from './number_09/4F/room090420';
import Room090516 from './number_09/5F/room090516';
import Room090517 from './number_09/5F/room090517';
import Room090518 from './number_09/5F/room090518';
import Room090519 from './number_09/5F/room090519';
import Room090520 from './number_09/5F/room090520';
import Room090522 from './number_09/5F/room090522';

function RoomRouter() {
  const { roomId } = useParams();

  const roomComponents = {
    '090425': <Room090425 />,
    '090106': <Room090106 />,
    '090119': <Room090119 />,
    '090219': <Room090219 />,
    '090320': <Room090320 />,
    '090327': <Room090327 />,
    '090408': <Room090408 />,
    '090409': <Room090409 />,
    '090410': <Room090410 />,
    '090411': <Room090411 />,
    '090420': <Room090420 />,
    '090516': <Room090516 />,
    '090517': <Room090517 />,
    '090518': <Room090518 />,
    '090519': <Room090519 />,
    '090520': <Room090520 />,
    '090522': <Room090522 />,
  };

  return roomComponents[roomId] || <div>해당 방을 찾을 수 없습니다.</div>;
}

function BuildingRouter() {
  const { buildingId } = useParams();

  if (buildingId === '9') return <Build09 />;
  if (buildingId === '56') return <Build56 />;
  if (buildingId === '6') return <Build06 />;
  if (buildingId === '4') return <Build04 />;
  if (buildingId === '5') return <Build05 />;
  if (buildingId === '11') return <Build11 />;
  if (buildingId === '2') return <Build02 />;
  if (buildingId === '3') return <Build03 />;
  if (buildingId === '26') return <Build26 />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/loadmap" element={<Loadmap />} />
        <Route path="/component/signup" element={<Signup />} />
        <Route path="/component/mypage" element={<Mypage />} />

        <Route path="/building/:buildingId" element={<BuildingRouter />} />
        <Route
          path="/building/:buildingId/room/:roomId"
          element={<RoomRouter />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
