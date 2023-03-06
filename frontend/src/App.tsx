import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import IntroPage from './pages/IntroPage';
import Router from './Router';

import './styles/main.scss';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/*" element={<Router />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
