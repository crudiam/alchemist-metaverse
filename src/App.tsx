import React, { Ref, useRef } from 'react';
import './style/css/App.css';
import Modal, { ModalHandle} from './components/Modal';
import Documentation from './components/book/Documentation';

function App() {
  const documentationModal: Ref<ModalHandle> = useRef(null);

  return (
    <div className="App">
      <button onClick={() => documentationModal.current.open()}>documentation</button>

      <Modal ref={documentationModal}>
        <Documentation />
      </Modal>
    </div>
  );
}

export default App;
