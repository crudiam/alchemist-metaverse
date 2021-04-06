import React from 'react';


const Lights = () => (
    <>
        <fog attach="fog" args={['#000', 0, 22]} />
        <ambientLight intensity={0.2} />
        {/* <group position={[1.88, 2.05, -2.05]}>
            <pointLight intensity={2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group> */}
    </>
);


export default Lights;