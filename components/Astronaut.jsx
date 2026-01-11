'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Astronaut({ mouse = { x: 0, y: 0 }, scrollProgress = 0 }) {
  const group = useRef()

  const { nodes, materials, animations } = useGLTF(
    '/astronaut_floating_in_space.glb'
  )

  const { actions } = useAnimations(animations, group)

  /* ---------------- Play animation ---------------- */
  useEffect(() => {
    if (!actions) return

    // ▶️ Play animations safely
    Object.values(actions).forEach((action) => {
      if (action) {
        action.reset().fadeIn(0.5).play()
      }
    })

    // 🧹 Cleanup safely
    return () => {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.stop()
        }
      })
    }
  }, [actions])

  /* ---------------- Fit + center ---------------- */
  useEffect(() => {
    if (!group.current) return

    const box = new THREE.Box3().setFromObject(group.current)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1

    // Normalize scale to keep the model comfortably in view
    const targetSize = 2.5
    const scale = targetSize / maxDim
    group.current.scale.setScalar(scale)

    const center = box.getCenter(new THREE.Vector3())
    group.current.position.sub(center)
    group.current.position.y -= 0.5
    group.current.position.z = -1.5
  }, [nodes])

  /* ---------------- Mouse + Scroll sync + Parallax ---------------- */
  useFrame(() => {
    if (!group.current) return

    // 🖱 Mouse rotation
    const targetRotY = mouse.x * 0.3
    const targetRotX =
      mouse.y * 0.2 + 0.5 * (1 - scrollProgress)

    group.current.rotation.y +=
      (targetRotY - group.current.rotation.y) * 0.05

    group.current.rotation.x +=
      (targetRotX - group.current.rotation.x) * 0.05

    // 📜 Scroll-based Z movement
    const baseZ = -1
    group.current.position.z +=
      ((baseZ * (1 - scrollProgress)) -
        group.current.position.z) *
      0.05

    // 📜 Parallax Y movement
    const parallaxY = scrollProgress * 3
    group.current.position.y +=
      ((-10 + parallaxY) - group.current.position.y) * 0.05
  })

  return (
    <group
      ref={group}
      position={[0, -10, 0]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.687}
        >
          <group
            name="a2d102a266ba49a28c0b4ae14e745f31fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />

                  <skinnedMesh
                    geometry={nodes.Object_7.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_8.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_9.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_10.geometry}
                    material={materials['Mat.1']}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_11.geometry}
                    material={materials['Mat.4']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_12.geometry}
                    material={materials['Mat.3']}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_13.geometry}
                    material={materials['Mat.2']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/astronaut_floating_in_space.glb')
