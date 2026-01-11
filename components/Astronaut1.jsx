'use client'
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

export function Astronaut1({
  mouse = { x: 0, y: 0 },
  scrollProgress = 0,
}) {
  const modelRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const { nodes, materials } = useGLTF('/astronaut_fixed.glb')

  const scale = isMobile ? 0.0065 : 0.009

  useFrame(() => {
    if (!modelRef.current) return

    /* ---------------- Rotation ---------------- */
    const rotStrength = isMobile ? 0.15 : 0.3

    const targetRotY = mouse.x * rotStrength
    const targetRotX =
      mouse.y * rotStrength + 0.35 * (1 - scrollProgress)

    modelRef.current.rotation.y +=
      (targetRotY - modelRef.current.rotation.y) * 0.12

    modelRef.current.rotation.x +=
      (targetRotX - modelRef.current.rotation.x) * 0.12

    /* ---------------- TRUE 3D PARALLAX ---------------- */
    const depth = isMobile ? -3 : -2
    const floatY = Math.sin(scrollProgress * Math.PI) * 0.15

    modelRef.current.position.z +=
      (depth * scrollProgress - modelRef.current.position.z) * 0.08

    modelRef.current.position.y +=
      (floatY - modelRef.current.position.y) * 0.08
  })

  return (
   <Float>
     <group ref={modelRef} position={[0, 0, 0]}>
      <group
        rotation={[2.893, 0.395, 0.475]}
        scale={scale}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
   </Float>
  )
}

useGLTF.preload('/astronaut_fixed.glb')
