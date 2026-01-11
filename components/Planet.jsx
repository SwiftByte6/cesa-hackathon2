'use client'

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Planet(props) {
  const group = useRef()
  const planetGroup = useRef()
  const { nodes, materials, animations } = useGLTF('/models/purple_planet.glb')
  const { actions } = useAnimations(animations, group)

  // Auto-play animations on mount
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => {
        if (action) action.play()
      })
    }
  }, [actions])

  // Rotate planet for smooth animation (disabled on mobile)
  useFrame(() => {
    if (planetGroup.current && typeof window !== 'undefined' && window.innerWidth >= 768) {
      planetGroup.current.rotation.y += 0.0002
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Glow effect - Point lights */}
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#d946ef" distance={150} />
      <pointLight position={[15, 15, 15]} intensity={2} color="#a855f7" distance={120} />
      <pointLight position={[-15, -15, 15]} intensity={1.5} color="#ec4899" distance={100} />

      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI /2, 0, 0]}>
          <group name="Root">
            <group name="Planet" rotation={[0, 0, Math.PI / 2]} ref={planetGroup}>
              {nodes.Planet_0 && (
                <mesh
                  name="Planet_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Planet_0.geometry}
                  material={materials?.PurplePlanet}
                />
              )}
              <group name="Clouds_0" rotation={[0, 0, -Math.PI / 2]} scale={1.013}>
                {nodes.Clouds_0_0 && (
                  <mesh
                    name="Clouds_0_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Clouds_0_0.geometry}
                    material={materials?.Clouds_0}
                  />
                )}
              </group>
            </group>
            <group name="Clouds_1" scale={1.019}>
              {nodes.Clouds_1_0 && (
                <mesh
                  name="Clouds_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Clouds_1_0.geometry}
                  material={materials?.Clouds_1}
                />
              )}
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/purple_planet.glb')


