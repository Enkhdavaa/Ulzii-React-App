import { Canvas } from '@react-three/fiber'
import Experience from './experience/Experience'
import './Introduction.css'

export default function Introduction()
{
    return <Canvas className='canvas'
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0, 8] 
        } }    
    >
        <Experience />
    </Canvas>
}