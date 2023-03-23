/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 SeoulTower.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
  };
  materials: {
    white: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

export default function Model({ transX, transY }: any) {
  const { nodes, materials } = useGLTF('/models/SeoulTower.glb') as GLTFResult;
  const modelRef = useRef<Group>(null);
  useFrame(() => {
    if (modelRef.current !== null && transX && transY) {
      modelRef.current.rotation.y += transX / 3000;
      modelRef.current.rotation.x += transY / 3000;
    }
  });
  return (
    <group dispose={null} ref={modelRef} position={[0, -1.5, -3]} receiveShadow>
      <group scale={[0.15, 1, 0.15]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.white} />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/SeoulTower.glb');
