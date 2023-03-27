/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Yisunshin.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Yisunshin.glb') as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, -1.8, 0]} receiveShadow>
      <group rotation={[0, -Math.PI / 2, 0]} scale={[0.6, 0.9, 0.6]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.001']}
        />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Material} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/Yisunshin.glb');
