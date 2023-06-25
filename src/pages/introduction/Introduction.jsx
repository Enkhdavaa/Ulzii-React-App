import { Canvas } from '@react-three/fiber'
import Experience from './experience/Experience'
import './Introduction.css'

export default function Introduction()
{
    return <Canvas className='canvas'>
        <Experience />
    </Canvas>
}