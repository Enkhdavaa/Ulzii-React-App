import { Sparkles, Float, Text, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Experience()
{
    return <>

        <PresentationControls
            rotation={ [ 0.13, 0.1, 0] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ -1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
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
                <Text 
                    font="./fonts/bebas-neue-v9-latin-regular.woff"
                    scale={ 0.3 }
                    maxWidth={ 7 }
                    lineHeight={ 0.75 }
                    textAlign='center'
                    position={ [ 0, -0.5, 0 ] }
                    color="red"
                >
                    (Flip me if you can!)
                </Text>
            </Float>
        </PresentationControls>
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