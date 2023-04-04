/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 NotDolHareubang.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Sphere003: THREE.Mesh;
  };
  materials: {
    //
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/NotDolHareubang.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, -2, 0]} receiveShadow>
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[0.07, 2.19, 0]}
        rotation={[-0.21, -1.57, 0]}
        scale={[0.45, 0.75, 0.7]}
      />
    </group>
  );
}

useGLTF.preload('/models/NotDolHareubang.glb');
