/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 NotGwangandaegyo.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    NurbsPath018: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/NotGwangandaegyo.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, -0.5, 0]} receiveShadow>
      <mesh
        geometry={nodes.NurbsPath018.geometry}
        material={materials.Material}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.07, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload('/models/NotGwangandaegyo.glb');
