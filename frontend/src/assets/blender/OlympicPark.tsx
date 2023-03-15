/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 OlympicPark.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle004: THREE.Mesh;
  };
  materials: {
    ['Material.014']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/OlympicPark.glb') as GLTFResult;
  const modelRef = useRef<Group>(null);
  useFrame(() => {
    if (modelRef.current !== null) modelRef.current.rotation.y += 0.01;
  });
  return (
    <group {...props} dispose={null} ref={modelRef} position={[0, -1, 0]}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.014']}
        position={[-1, 0, -1]}
        scale={[0.25, 1.5, 0.25]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['Material.014']}
        position={[-1, 0, 1]}
        scale={[0.25, 1.5, 0.25]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.014']}
        position={[1, 0, 1]}
        scale={[0.25, 1.5, 0.25]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials['Material.014']}
        position={[1, 0, -1]}
        scale={[0.25, 1.5, 0.25]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials['Material.014']}
        position={[0, 1, -1]}
        scale={[0.75, 1, 0.25]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Material.014']}
        position={[0, 1, 1]}
        scale={[0.75, 1, 0.25]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['Material.014']}
        position={[-1, 2.2, 0]}
        scale={[0.1, 0.2, 0.75]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials['Material.014']}
        position={[1, 2.2, 0]}
        scale={[0.1, 0.2, 0.75]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials['Material.014']}
        position={[0, 2.6, -2.45]}
        scale={[1.25, 0.2, 1.2]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials['Material.014']}
        position={[0, 2.6, 2.45]}
        scale={[1.25, 0.2, 1.2]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials['Material.009']}
        position={[-1.14, 2.58, 0]}
        rotation={[0, 0, -1.69]}
        scale={[0.21, 0.05, 0.21]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials['Material.010']}
        position={[-1.15, 2.57, -0.49]}
        rotation={[0, 0, -1.55]}
        scale={[0.21, 0.05, 0.21]}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials['Material.011']}
        position={[-1.15, 2.41, -0.25]}
        rotation={[0, 0, -1.62]}
        scale={[0.21, 0.05, 0.21]}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials['Material.012']}
        position={[-1.16, 2.41, 0.25]}
        rotation={[0, 0, -1.76]}
        scale={[0.21, 0.05, 0.21]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials['Material.013']}
        position={[-1.12, 2.58, 0.49]}
        rotation={[0, 0, -1.82]}
        scale={[0.21, 0.05, 0.21]}
      />
    </group>
  );
}

useGLTF.preload('/models/OlympicPark.glb');