/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, Text } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../table.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.12, 2.29, 3]} rotation={[1.18, 0.01, -0.03]}>
        <PerspectiveCamera makeDefault={true} far={100} near={0.1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.13, 2.05, 0.01]} rotation={[0, 0.65, 0]}>
        <pointLight intensity={2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh
        geometry={nodes.MOD_Floor_02_O_straight_tiny001.geometry}
        material={materials.M_ENV_MOD_Floor}
        position={[-2.07, 0, -0.01]}
      />
      <mesh
        geometry={nodes.MOD_Floor_02_O_straight_tiny002.geometry}
        material={materials.M_ENV_MOD_Floor}
        position={[-2.07, 0, -2.01]}
      />
      <mesh
        geometry={nodes.MOD_Floor_02_O_straight_tiny004.geometry}
        material={materials.M_ENV_MOD_Floor}
        position={[-0.07, 0, -0.01]}
      />
      <mesh
        geometry={nodes.MOD_Floor_02_O_straight_tiny005.geometry}
        material={materials.M_ENV_MOD_Floor}
        position={[-0.07, 0, -2.01]}
      />
      <mesh
        geometry={nodes.SM_PROP_table_interior_02.geometry}
        material={materials.M_PROP_wood_planks_interior_01}
        position={[0.04, 0, -0.11]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_rug_interior_07.geometry}
        material={materials.M_PROP_fabrics_interior}
        position={[-0.03, 0, 0.09]}
        rotation={[0, 0.97, 0]}
      />
      
      <Text 
        position={[0.58, 1.1, -0.51]}
        rotation={[0, -0.1, 0]}
        fontSize={0.05}
      >FAQ</Text>

      <mesh
        geometry={nodes.SM_PROP_book_interior_02.geometry}
        material={materials.M_PROP_frames_interior}
        position={[0.54, 0.88, -0.31]}
        rotation={[0.49, -0.31, 0.18]}
        onClick={props.onFAQClick}
      />
      <mesh
        geometry={nodes.SM_PROP_candle_interior_03.geometry}
        material={materials.M_PROP_metal_interior}
        position={[-0.29, 0.82, -0.36]}
        rotation={[0, -0.8, 0]}
      />

      <mesh
        geometry={nodes.SM_PROP_book_interior_01.geometry}
        material={materials['M_PROP_frames_interior.001']}
        position={[-0.82, 0.87, -0.04]}
        rotation={[0, -1, -Math.PI / 2]}
      />

      <Text 
        position={[-0.79, 1.25, -0.36]}
        rotation={[0, 0.24, 0]}
        fontSize={0.03}
      >Documentation</Text>

      <mesh
        geometry={nodes.SM_PROP_book_interior_03.geometry}
        material={materials['M_PROP_frames_interior.001']}
        position={[-0.72, 0.81, -0.4]}
        rotation={[0, 0.24, 0]}
        onClick={props.onDocumentationClick}
      />
      <mesh
        geometry={nodes.SM_PROP_bottle_interior_02.geometry}
        material={materials.M_PROP_items_interior_01}
        position={[-0.58, 0.82, -0.22]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_bowl_interior_01.geometry}
        material={materials.M_PROP_wood_planks_interior_02}
        position={[0.82, 0.82, 0.09]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_candle_interior_01.geometry}
        material={materials['M_PROP_metal_interior.001']}
        position={[-0.41, 0.82, -0.46]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_candle_interior_02.geometry}
        material={materials['M_PROP_metal_interior.001']}
        position={[0.2, 0.82, -0.32]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_candle_interior_04.geometry}
        material={materials['M_PROP_metal_interior.001']}
        position={[0.89, 0.82, -0.42]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_coinpouch_interior.geometry}
        material={materials.M_PROP_items_interior_02}
        position={[1.03, 0.82, -0.13]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_hourglass_interior.geometry}
        material={materials.M_PROP_items_interior_02}
        position={[-0.92, 0.83, 0.21]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_paper_interior_01.geometry}
        material={materials['M_PROP_frames_interior.001']}
        position={[0.12, 0.83, 0.06]}
        rotation={[0, 0.02, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_paper_interior_02.geometry}
        material={materials['M_PROP_frames_interior.001']}
        position={[-0.35, 0.83, 0.05]}
        rotation={[0, 0.28, 0]}
      />
      <mesh
        geometry={nodes.SM_PROP_book_interior_01001.geometry}
        material={materials['M_PROP_frames_interior.001']}
        position={[-0.82, 0.95, -0.04]}
        rotation={[0.15, -0.56, -1.47]}
      />
      <mesh
        geometry={nodes.SM_PROP_magnifyingglass_interior.geometry}
        material={materials['M_PROP_frames_interior.002']}
        position={[0.48, 0.83, 0.07]}
        rotation={[0, 0.48, 0]}
      />
    </group>
  )
}

useGLTF.preload('../../../table.gltf')