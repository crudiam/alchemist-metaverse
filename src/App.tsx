import React, { Ref, useRef } from 'react';
import './style/css/App.css';
import Modal, { ModalHandle} from './components/Modal';
import Documentation from './components/book/Documentation';
import SampleThreeEnv from './components/room/SampleThreeJSEnv';

function App() {
  const documentationModal: Ref<ModalHandle> = useRef(null);


  const onDocumentationClick = () => documentationModal.current.open();

  return (
    <div className="App">
      {/* <button onClick={() => documentationModal.current.open()}>documentation</button> */}

      <Modal ref={documentationModal}>
        <Documentation />
      </Modal>

      <SampleThreeEnv {...{
        onDocumentationClick
      }} />
    </div>
  );
}

export default App;
