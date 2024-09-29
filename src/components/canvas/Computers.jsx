import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {meshBounds, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
import { canvas, div } from 'framer-motion/client';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <div></div>
  )
}

export default Computers