import { Sparkles, Float, Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Experience()
{
    return <>
        <OrbitControls makeDefault/>
        <Float 
            floatIntensity={ 3 } 
            rotationIntensity={ 3 }
        >
            <Text 
                font="./fonts/bebas-neue-v9-latin-regular.woff"
                scale={ 1 }
                maxWidth={ 3.5 }
                lineHeight={ 0.75 }
                textAlign='center'
                position={ [ 0, 0.5, 0 ] }
                color="green"
            >
                COMING SOON!
            </Text>
        </Float>
        <Sparkles 
            size={ 6 }
            scale={ [ 25, 10, 15 ] }
            position-y={ 0.5 }
            speed={ 0.5 }
            count={ 200 }
            color="green"
        />
    </>
}