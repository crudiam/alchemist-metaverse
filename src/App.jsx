import { Suspense, useRef } from 'react';
import './style/css/App.css';
import { Loader } from '@react-three/drei'

import TableModel from './components/Three/Table';
import Lights from './components/Three/Lights';
import {Canvas } from '@react-three/fiber';
import Modal from './components/Modal';
import Documentation from './components/book/Documentation';
import Submissions from './components/submissions';

const Scene = (props) => {

  return (
    <Suspense fallback={null}>
      <TableModel {...props} />
    </Suspense>
  );
};




function App(props) {
  const documentationModal = useRef(null);
  const faqModal = useRef(null);

  const onDocumentationClick = () => {
    // documentationModal.current.open();
  }

  const onFAQClick = () => {
    // faqModal.current.open();
  }

  return (
    <div className="App">
      <Submissions />
      <Modal ref={documentationModal}>
        <Documentation />
      </Modal>
      
      <Modal ref={faqModal}>
        <Documentation />
      </Modal>


      <Canvas>
          <Lights />
          <Scene {...{ onDocumentationClick, onFAQClick }} />
      </Canvas>

      {/* Loader */}
      <Loader />
    </div>
  );
}

export default App;

      // <SampleThreeEnv {...{
      //   onDocumentationClick
      // }} />



