import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron, Torus, Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import './ThreeScene.css'

const DistortBlob = () => {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.12
    ref.current.rotation.y = t * 0.16
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.35, 12]} scale={1.6}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.42}
          speed={1.8}
          roughness={0.15}
          metalness={0.45}
        />
      </Icosahedron>
    </Float>
  )
}

const Ring = () => {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.25
  })
  return (
    <Torus ref={ref} args={[2.6, 0.02, 16, 120]} rotation={[Math.PI / 2.6, 0, 0]}>
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.45} />
    </Torus>
  )
}

const Starfield = () => {
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3)
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 14
    return arr
  }, [])
  return (
    <Points positions={positions} stride={3}>
      <PointMaterial color="#818cf8" size={0.025} sizeAttenuation transparent opacity={0.7} />
    </Points>
  )
}

const Rig = ({ children }) => {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    const { x, y } = state.pointer
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.25, 0.05)
  })
  return <group ref={group}>{children}</group>
}

const ThreeScene = () => {
  return (
    <div className="three-scene">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-5, -2, 2]} intensity={1.5} color="#22d3ee" />
        <Rig>
          <DistortBlob />
          <Ring />
        </Rig>
        <Starfield />
      </Canvas>
    </div>
  )
}

export default ThreeScene
