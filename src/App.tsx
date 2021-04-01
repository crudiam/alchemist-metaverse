import React, { Ref, useEffect, useRef } from 'react';
import './style/css/App.css';
import Modal, { ModalHandle} from './components/Modal';
import Documentation from './components/book/Documentation';
import SampleThreeEnv from './components/room/SampleThreeJSEnv';
import Submission from './components/book/crucible-submission/Submission';

function App() {
  const documentationModal: Ref<ModalHandle> = useRef(null);
  const submissionModal: Ref<ModalHandle> = useRef(null);

  const onDocumentationClick = () => documentationModal.current.open();
  const onSubmissionClick = () => submissionModal.current.open();



  useEffect(() => {
    if (submissionModal.current !== null) {
      onSubmissionClick();
    }
  }, [submissionModal])


  return (
    <div className="App">
      {/* <button onClick={() => documentationModal.current.open()}>documentation</button> */}

      <Modal ref={documentationModal}>
        <Documentation />
      </Modal>
      
      <Modal ref={submissionModal}>
        <Submission />
      </Modal>


      <SampleThreeEnv {...{
        onDocumentationClick
      }} />
    </div>
  );
}

export default App;
