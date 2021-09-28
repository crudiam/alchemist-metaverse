import { Suspense, useRef, useState, useEffect } from 'react';
import './style/css/App.css';
import { Loader } from '@react-three/drei'

import TableModel from './components/Three/Table';
import Lights from './components/Three/Lights';
import {Canvas } from '@react-three/fiber';
import Modal from './components/Modal';
// import Documentation from './components/book/Documentation';
import FAQ from './components/book/FAQ';
import { splitMarkdownIntoPages } from './components/book/helpers';
import DnDContext from './components/dnd';

const Scene = (props) => {
  return (
    <Suspense fallback={null}>
      <TableModel {...props} />
    </Suspense>
  );
};

// const README_URL = 'https://raw.githubusercontent.com/alchemistcoin/alchemist/main/README.md';
function App(props) {

  return (
    <div className="App">

      <Canvas>
          <Lights />
          <Scene />
      </Canvas>

      {/* Loader */}
      <Loader />
    </div>
  );
}

export default App;

