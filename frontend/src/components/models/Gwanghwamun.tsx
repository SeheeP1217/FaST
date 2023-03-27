/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Gwanghwamun.glb --types
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Text_1: THREE.Mesh;
    Text_2: THREE.Mesh;
    Text_3: THREE.Mesh;
    Text_4: THREE.Mesh;
    Text_5: THREE.Mesh;
    Text_6: THREE.Mesh;
    Text_7: THREE.Mesh;
    Text_8: THREE.Mesh;
    Text_9: THREE.Mesh;
    Text_10: THREE.Mesh;
    Text_11: THREE.Mesh;
  };
  materials: {
    black: THREE.MeshStandardMaterial;
    brown: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial;
    Gray: THREE.MeshStandardMaterial;
    indigo: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['light green']: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Gwanghwamun.glb') as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, -2, 0]} receiveShadow>
      <group rotation={[1.83, 0, 0]} scale={0.23}>
        <mesh geometry={nodes.Text_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Text_2.geometry} material={materials.brown} />
        <mesh geometry={nodes.Text_3.geometry} material={materials.white} />
        <mesh geometry={nodes.Text_4.geometry} material={materials.Gray} />
        <mesh geometry={nodes.Text_5.geometry} material={materials.indigo} />
        <mesh
          geometry={nodes.Text_6.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Text_7.geometry}
          material={materials['light green']}
        />
        <mesh geometry={nodes.Text_8.geometry} material={materials.green} />
        <mesh
          geometry={nodes.Text_9.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Text_10.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Text_11.geometry}
          material={materials['Material.003']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/Gwanghwamun.glb');
