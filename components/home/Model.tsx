"use client";

import { useLoader, Canvas, useThree, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useGLTF, Detailed, Clone } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
// import * as THREE from 'three';
function Tree() {
    // const { scene } = useGLTF("/models/kapok_tree_voxel.glb")
    const glb = useLoader(GLTFLoader, "/models/kapok_tree_voxel.glb")
    // const glb = useLoader(GLTFLoader, "/models/Lowpoly_tree_sample.glb")
    const scene = glb.scene;
    const mesh = useRef<Mesh>(null!);
    console.log(glb)
    useFrame(() => {
        mesh.current.rotation.y += 0.003
    });

    const scale = 0.045;
    // const scale = 1
    return (
        <mesh ref={mesh} scale={[scale, scale, scale]} rotation={[0.53, 0, 0]} position={[0,-2.2,0]}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default function Model() {
    // const glb = useLoader(GLTFLoader, "/models/kapok_tree_voxel.glb")
    // const glb = useGLTF("/models/kapok_tree_voxel.glb")
    const scene = useRef(null);
    return (
    <div className='flex justify-center items-center w-full aspect-[40/60]'>
      <Canvas className='h-full w-full'>
        <Tree />
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={20}/>
      </Canvas>
    </div>
    )
}