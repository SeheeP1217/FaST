/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Cheomseongdae.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cube: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
  };
  materials: {
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/Cheomseongdae.glb'
  ) as GLTFResult;
  const modelRef = useRef<Group>(null);
  useFrame(() => {
    if (modelRef.current !== null) modelRef.current.rotation.y += 0.01;
  });
  return (
    <group {...props} dispose={null} ref={modelRef} position={[0, -2, 0]}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.012']}
        scale={[1, 2.5, 1]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.012']}
        position={[0, 4.32, 0]}
        scale={[0.75, 0.15, 0.75]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.010']}
        scale={[1, 2.5, 1]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.001']}
        scale={[1, 2.5, 1]}
      />
    </group>
  );
}

useGLTF.preload('/models/Cheomseongdae.glb');
