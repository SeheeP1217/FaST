/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Cheongwadae.glb --types
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
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder019: THREE.Mesh;
    Cylinder020: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cylinder025: THREE.Mesh;
    Cylinder026: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cylinder029: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube024_1: THREE.Mesh;
    Cube024_2: THREE.Mesh;
    Cube059: THREE.Mesh;
    Cube059_1: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube038: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cube097: THREE.Mesh;
    Cube097_1: THREE.Mesh;
    Cube097_2: THREE.Mesh;
    Cube101: THREE.Mesh;
    Cube101_1: THREE.Mesh;
    Cube101_2: THREE.Mesh;
    Cube106: THREE.Mesh;
    Cube106_1: THREE.Mesh;
    Cube106_2: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Cheongwadae.glb') as GLTFResult;
  const modelRef = useRef<Group>(null);
  useFrame(() => {
    if (modelRef.current !== null) modelRef.current.rotation.y += 0.01;
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0, 0.35]}
        scale={[0.5, 0.05, 0.15]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0, 0.55]}
        scale={[0.45, 0.03, 0.05]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Material}
        position={[0, 0, 0.65]}
        scale={[0.45, 0.02, 0.05]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.Material}
        position={[-0.47, 0, 0.6]}
        scale={[0.03, 0.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0.47, 0, 0.6]}
        scale={[0.03, 0.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.Material}
        position={[-0.3, 0.1, 0.35]}
        scale={[0.03, 0.05, 0.15]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.Material}
        position={[0, 0.1, 0.35]}
        scale={[0.28, 0.03, 0.05]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.Material}
        position={[0, 0.1, 0.45]}
        scale={[0.28, 0.02, 0.05]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.Material}
        position={[0, 0.1, 0.25]}
        scale={[0.28, 0.05, 0.05]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.Material}
        position={[0.3, 0.1, 0.35]}
        scale={[0.03, 0.05, 0.15]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.Material}
        position={[-0.39, 0.1, 0.45]}
        scale={[0.06, 0.02, 0.05]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials.Material}
        position={[-0.47, 0.1, 0.35]}
        scale={[0.03, 0.05, 0.15]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.Material}
        position={[0.47, 0.1, 0.35]}
        scale={[0.03, 0.05, 0.15]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials.Material}
        position={[0.39, 0.1, 0.45]}
        scale={[0.06, 0.02, 0.05]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials.Material}
        position={[-0.39, 0.1, 0.35]}
        scale={[0.06, 0.03, 0.05]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials.Material}
        position={[0.39, 0.1, 0.35]}
        scale={[0.06, 0.03, 0.05]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials.Material}
        position={[-0.39, 0.1, 0.25]}
        scale={[0.06, 0.05, 0.05]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials.Material}
        position={[0.39, 0.1, 0.25]}
        scale={[0.06, 0.05, 0.05]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[-0.85, 0.2, 0.06]}
        scale={[0.08, 0.4, 0.08]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials.Material}
        position={[0, 0, -0.67]}
        scale={[1, 0.1, 0.88]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials.Material}
        position={[0, 0.9, 0.06]}
        scale={[1, 0.05, 0.06]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials.Material}
        position={[0, 0.9, -1.15]}
        scale={[1, 0.05, 0.06]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials.Material}
        position={[0.94, 0.9, -0.54]}
        scale={[0.06, 0.05, 0.55]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials.Material}
        position={[-0.94, 0.9, -0.54]}
        scale={[0.06, 0.05, 0.55]}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials['Material.001']}
        position={[0, 1, -0.55]}
        scale={[1.25, 0.25, 1]}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials.Material}
        position={[0, 0, -4.05]}
        scale={[5, 0.1, 2.5]}
      />
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={materials.Material}
        position={[4.4, 0.2, -1.75]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials['Material.002']}
        position={[0, 0.2, -4.05]}
        scale={[4.5, 0.5, 2.2]}
      />
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={materials.Material}
        position={[-4.4, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder019.geometry}
        material={materials.Material}
        position={[-3.6, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials.Material}
        position={[-2.8, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials.Material}
        position={[-2, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={materials['Material.002']}
        position={[0, 0.2, -4.05]}
        scale={[4.5, 0.5, 2.2]}
      />
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={materials.Material}
        position={[-1.2, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder023.geometry}
        material={materials.Material}
        position={[4.4, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder024.geometry}
        material={materials.Material}
        position={[3.6, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials['Material.002']}
        position={[0, 0.2, -4.05]}
        scale={[4.5, 0.5, 2.2]}
      />
      <mesh
        geometry={nodes.Cylinder025.geometry}
        material={materials.Material}
        position={[2.8, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder026.geometry}
        material={materials.Material}
        position={[2, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder027.geometry}
        material={materials.Material}
        position={[1.2, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder028.geometry}
        material={materials.Material}
        position={[0.4, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder029.geometry}
        material={materials.Material}
        position={[-0.4, 0.2, -6.35]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials.Material}
        position={[0, 1.2, -4.05]}
        scale={[5, 0.1, 2.5]}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials.Material}
        position={[0, 1.4, -4.05]}
        scale={[4.25, 0.05, 2.25]}
      />
      <group position={[0, 1.5, -4.05]} scale={[4, 0.5, 2]}>
        <mesh
          geometry={nodes.Cube024_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube024_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[0, 1.5, -4.05]} scale={[4, 0.5, 2]}>
        <mesh
          geometry={nodes.Cube059.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube059_1.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials['Material.002']}
        position={[0, 1.5, -4.05]}
        scale={[4, 0.5, 2]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={materials['Material.002']}
        position={[0, 2.5, -4.05]}
        scale={[5, 0.5, 3]}
      />
      <mesh
        geometry={nodes.Cube036.geometry}
        material={materials.Material}
        position={[0, 2.5, -4.05]}
        scale={[5, 0.5, 3]}
      />
      <mesh
        geometry={nodes.Cube037.geometry}
        material={materials.Material}
        position={[0, 2.5, -4.05]}
        scale={[5, 0.5, 3]}
      />
      <mesh
        geometry={nodes.Cube038.geometry}
        material={materials.Material}
        position={[0, 2.5, -4.05]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-5, -0.5, -3]}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={materials.Material}
        position={[0, 2.5, -4.05]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[5, 0.5, 3]}
      />
      <mesh
        geometry={nodes.Cube040.geometry}
        material={materials.Material}
        position={[0, 2.5, -4.05]}
        rotation={[0, 0, -Math.PI]}
        scale={[-5, -0.5, -3]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.Material}
        position={[-4.6, 0.7, -4.05]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.1, 0.5, 0.1]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials.Material}
        position={[4.6, 0.7, -4.05]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.1, 0.5, 0.1]}
      />
      <group position={[-5.84, 0.2, 0.52]} scale={[1.25, 0.6, 1.75]}>
        <mesh
          geometry={nodes.Cube097.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube097_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube097_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group
        position={[0, 1, -0.55]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.25, 0.25, 1]}
      >
        <mesh geometry={nodes.Cube101.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Cube101_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube101_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[5.84, 0.2, 0.52]} scale={[1.25, 0.6, 1.75]}>
        <mesh
          geometry={nodes.Cube106.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube106_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube106_2.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/Cheongwadae.glb');