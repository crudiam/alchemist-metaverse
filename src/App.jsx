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



const FAQ_URL = 'https://hackmd.io/@thegostep/%E2%9A%97%EF%B8%8F/download';
// const README_URL = 'https://raw.githubusercontent.com/alchemistcoin/alchemist/main/README.md';

function App(props) {
  // const documentationModal = useRef(null);
  const faqModal = useRef(null);

  const [faq, setFaq] = useState([]);
  // const [readme, setReadme] = useState([]);

    useEffect(() => {
        const getFAQ = async () => {
            const resp = await fetch(FAQ_URL);
            const body = await resp.text()
            const pages = splitMarkdownIntoPages(body);
            setFaq(pages)
        };

        // const getReadMe = async () => {
        //     const resp = await fetch(README_URL);
        //     const body = await resp.text()
        //     const pages = splitMarkdownIntoPages(body);
        //     setReadme(pages)
        // };

        getFAQ();
        // getReadMe();

    }, []);


  // const onDocumentationClick = () => {
  //   documentationModal.current.open();
  // }

  const onFAQClick = () => {
    faqModal.current.open();
  }




  return (
    <div className="App">
      <DnDContext />

      <Modal ref={faqModal}>
        <FAQ pages={faq} />
      </Modal>


      {/* <Canvas>
          <Lights />
          <Scene {...{ onFAQClick }} />
      </Canvas> */}

      {/* Loader */}
      {/* <Loader /> */}
    </div>
  );
}

export default App;

